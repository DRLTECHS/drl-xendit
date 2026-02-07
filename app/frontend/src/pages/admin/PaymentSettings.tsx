import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { createClient } from '@metagptx/web-sdk';
import { toast } from 'sonner';
import {
  Code2,
  LayoutDashboard,
  CreditCard,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Key,
  Shield,
  CheckCircle,
  XCircle,
  ArrowLeft,
} from 'lucide-react';

const client = createClient();

interface PaymentSetting {
  id: number;
  provider: string;
  public_key: string;
  secret_key: string;
  is_active: boolean;
  environment: string;
  created_at: string;
  updated_at: string;
}

export default function PaymentSettings() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState<PaymentSetting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showSecretKey, setShowSecretKey] = useState<Record<number, boolean>>({});
  const [formData, setFormData] = useState({
    provider: 'xendit',
    public_key: '',
    secret_key: '',
    is_active: true,
    environment: 'sandbox',
  });
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const response = await client.entities.payment_settings.query({
        query: {},
        sort: '-created_at',
        limit: 100,
      });
      setSettings(response.data?.items || []);
    } catch (error) {
      console.error('Failed to load settings:', error);
      toast.error('Failed to load payment settings');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!formData.public_key || !formData.secret_key) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSaving(true);
    try {
      const now = new Date().toISOString();
      
      if (editingId) {
        await client.entities.payment_settings.update({
          id: String(editingId),
          data: {
            ...formData,
            updated_at: now,
          },
        });
        toast.success('Payment setting updated successfully');
      } else {
        await client.entities.payment_settings.create({
          data: {
            ...formData,
            created_at: now,
            updated_at: now,
          },
        });
        toast.success('Payment setting created successfully');
      }

      setIsDialogOpen(false);
      setEditingId(null);
      setFormData({
        provider: 'xendit',
        public_key: '',
        secret_key: '',
        is_active: true,
        environment: 'sandbox',
      });
      loadSettings();
    } catch (error) {
      console.error('Failed to save setting:', error);
      toast.error('Failed to save payment setting');
    } finally {
      setIsSaving(false);
    }
  };

  const handleEdit = (setting: PaymentSetting) => {
    setEditingId(setting.id);
    setFormData({
      provider: setting.provider,
      public_key: setting.public_key,
      secret_key: setting.secret_key,
      is_active: setting.is_active,
      environment: setting.environment || 'sandbox',
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: number) => {
    try {
      await client.entities.payment_settings.delete({ id: String(id) });
      toast.success('Payment setting deleted successfully');
      loadSettings();
    } catch (error) {
      console.error('Failed to delete setting:', error);
      toast.error('Failed to delete payment setting');
    }
  };

  const handleToggleActive = async (setting: PaymentSetting) => {
    try {
      await client.entities.payment_settings.update({
        id: String(setting.id),
        data: {
          is_active: !setting.is_active,
          updated_at: new Date().toISOString(),
        },
      });
      toast.success(`Payment setting ${!setting.is_active ? 'activated' : 'deactivated'}`);
      loadSettings();
    } catch (error) {
      console.error('Failed to toggle setting:', error);
      toast.error('Failed to update payment setting');
    }
  };

  const handleLogout = async () => {
    try {
      await client.auth.logout();
      toast.success('Logged out successfully');
      navigate('/');
    } catch {
      toast.error('Failed to logout');
    }
  };

  const maskKey = (key: string) => {
    if (!key) return '';
    if (key.length <= 8) return '••••••••';
    return key.substring(0, 4) + '••••••••' + key.substring(key.length - 4);
  };

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      href: '/admin/dashboard',
      active: false,
    },
    {
      title: 'Payment Settings',
      icon: CreditCard,
      href: '/admin/payment-settings',
      active: true,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="p-4 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">DRL-IT</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                item.active
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.title}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <Button
            variant="ghost"
            onClick={handleLogout}
            className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Link to="/admin/dashboard" className="text-slate-400 hover:text-white transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-3xl font-bold text-white">Payment API Settings</h1>
              </div>
              <p className="text-slate-400">Manage your Xendit API keys and payment gateway configuration.</p>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  onClick={() => {
                    setEditingId(null);
                    setFormData({
                      provider: 'xendit',
                      public_key: '',
                      secret_key: '',
                      is_active: true,
                      environment: 'sandbox',
                    });
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add API Key
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-slate-800">
                <DialogHeader>
                  <DialogTitle className="text-white">
                    {editingId ? 'Edit Payment Setting' : 'Add New Payment Setting'}
                  </DialogTitle>
                  <DialogDescription className="text-slate-400">
                    Configure your payment gateway API credentials.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Provider</Label>
                    <Select
                      value={formData.provider}
                      onValueChange={(value) => setFormData({ ...formData, provider: value })}
                    >
                      <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                        <SelectValue placeholder="Select provider" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="xendit">Xendit</SelectItem>
                        <SelectItem value="stripe">Stripe</SelectItem>
                        <SelectItem value="midtrans">Midtrans</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Environment</Label>
                    <Select
                      value={formData.environment}
                      onValueChange={(value) => setFormData({ ...formData, environment: value })}
                    >
                      <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
                        <SelectValue placeholder="Select environment" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-slate-700">
                        <SelectItem value="sandbox">Sandbox (Testing)</SelectItem>
                        <SelectItem value="production">Production (Live)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Public Key</Label>
                    <Input
                      placeholder="xnd_public_..."
                      value={formData.public_key}
                      onChange={(e) => setFormData({ ...formData, public_key: e.target.value })}
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Secret Key</Label>
                    <Input
                      type="password"
                      placeholder="xnd_secret_..."
                      value={formData.secret_key}
                      onChange={(e) => setFormData({ ...formData, secret_key: e.target.value })}
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label className="text-slate-300">Active</Label>
                    <Switch
                      checked={formData.is_active}
                      onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                    className="border-slate-700 text-slate-300 hover:bg-slate-800"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={isSaving}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    {isSaving ? 'Saving...' : editingId ? 'Update' : 'Create'}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Info Card */}
          <Card className="bg-blue-500/10 border-blue-500/30 mb-6">
            <CardContent className="p-4 flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-400 mt-0.5" />
              <div>
                <p className="text-blue-400 font-medium">Security Notice</p>
                <p className="text-slate-400 text-sm">
                  Your API keys are encrypted and stored securely. Never share your secret keys with anyone.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Settings List */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
              <p className="text-slate-400 mt-4">Loading settings...</p>
            </div>
          ) : settings.length === 0 ? (
            <Card className="bg-slate-900 border-slate-800">
              <CardContent className="p-12 text-center">
                <Key className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No API Keys Configured</h3>
                <p className="text-slate-400 mb-4">
                  Add your first payment API key to start accepting payments.
                </p>
                <Button
                  onClick={() => setIsDialogOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add API Key
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {settings.map((setting) => (
                <Card key={setting.id} className="bg-slate-900 border-slate-800">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          setting.is_active ? 'bg-green-500/20' : 'bg-slate-700'
                        }`}>
                          <CreditCard className={`w-6 h-6 ${
                            setting.is_active ? 'text-green-400' : 'text-slate-400'
                          }`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold text-white capitalize">
                              {setting.provider}
                            </h3>
                            <span className={`px-2 py-0.5 text-xs rounded-full ${
                              setting.environment === 'production'
                                ? 'bg-red-500/20 text-red-400'
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {setting.environment}
                            </span>
                            {setting.is_active ? (
                              <span className="flex items-center gap-1 text-xs text-green-400">
                                <CheckCircle className="w-3 h-3" />
                                Active
                              </span>
                            ) : (
                              <span className="flex items-center gap-1 text-xs text-slate-400">
                                <XCircle className="w-3 h-3" />
                                Inactive
                              </span>
                            )}
                          </div>
                          <div className="mt-2 space-y-1">
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-slate-400">Public Key:</span>
                              <code className="text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
                                {maskKey(setting.public_key)}
                              </code>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <span className="text-slate-400">Secret Key:</span>
                              <code className="text-slate-300 bg-slate-800 px-2 py-0.5 rounded">
                                {showSecretKey[setting.id] ? setting.secret_key : maskKey(setting.secret_key)}
                              </code>
                              <button
                                onClick={() => setShowSecretKey({
                                  ...showSecretKey,
                                  [setting.id]: !showSecretKey[setting.id]
                                })}
                                className="text-slate-400 hover:text-white transition-colors"
                              >
                                {showSecretKey[setting.id] ? (
                                  <EyeOff className="w-4 h-4" />
                                ) : (
                                  <Eye className="w-4 h-4" />
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={setting.is_active}
                          onCheckedChange={() => handleToggleActive(setting)}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEdit(setting)}
                          className="text-slate-400 hover:text-white hover:bg-slate-800"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-slate-400 hover:text-red-400 hover:bg-red-500/10"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent className="bg-slate-900 border-slate-800">
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-white">Delete Payment Setting</AlertDialogTitle>
                              <AlertDialogDescription className="text-slate-400">
                                Are you sure you want to delete this payment setting? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel className="border-slate-700 text-slate-300 hover:bg-slate-800">
                                Cancel
                              </AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDelete(setting.id)}
                                className="bg-red-500 hover:bg-red-600 text-white"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}