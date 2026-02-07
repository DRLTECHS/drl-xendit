import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createClient } from '@metagptx/web-sdk';
import { toast } from 'sonner';
import {
  Code2,
  LayoutDashboard,
  CreditCard,
  MessageSquare,
  TrendingUp,
  DollarSign,
  Users,
  Activity,
  LogOut,
  Settings,
  ChevronRight,
} from 'lucide-react';

const client = createClient();

interface DashboardStats {
  totalTransactions: number;
  totalRevenue: number;
  pendingMessages: number;
  activePaymentSettings: number;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState<DashboardStats>({
    totalTransactions: 0,
    totalRevenue: 0,
    pendingMessages: 0,
    activePaymentSettings: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      // Load transactions
      const transactionsRes = await client.entities.transactions.query({
        query: {},
        limit: 1000,
      });
      const transactions = transactionsRes.data?.items || [];
      const totalRevenue = transactions
        .filter((t: { status: string }) => t.status === 'success')
        .reduce((sum: number, t: { amount: number }) => sum + (t.amount || 0), 0);

      // Load contact submissions
      const contactsRes = await client.entities.contact_submissions.query({
        query: { status: 'pending' },
        limit: 1000,
      });
      const pendingMessages = contactsRes.data?.items?.length || 0;

      // Load payment settings
      const paymentRes = await client.entities.payment_settings.query({
        query: { is_active: true },
        limit: 100,
      });
      const activePaymentSettings = paymentRes.data?.items?.length || 0;

      setStats({
        totalTransactions: transactions.length,
        totalRevenue,
        pendingMessages,
        activePaymentSettings,
      });
    } catch (error) {
      console.error('Failed to load dashboard data:', error);
    } finally {
      setIsLoading(false);
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

  const statCards = [
    {
      title: 'Total Transactions',
      value: stats.totalTransactions,
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Total Revenue',
      value: `$${stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Pending Messages',
      value: stats.pendingMessages,
      icon: MessageSquare,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-500/10',
    },
    {
      title: 'Active Payment APIs',
      value: stats.activePaymentSettings,
      icon: Activity,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-500/10',
    },
  ];

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      href: '/admin/dashboard',
      active: true,
    },
    {
      title: 'Payment Settings',
      icon: CreditCard,
      href: '/admin/payment-settings',
      active: false,
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
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white">Dashboard</h1>
              <p className="text-slate-400 mt-1">Welcome back! Here's an overview of your platform.</p>
            </div>
            <Link to="/admin/payment-settings">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                <Settings className="w-4 h-4 mr-2" />
                Manage API Keys
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statCards.map((stat, index) => (
              <Card key={index} className="bg-slate-900 border-slate-800">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-sm">{stat.title}</p>
                      <p className="text-2xl font-bold text-white mt-1">
                        {isLoading ? '...' : stat.value}
                      </p>
                    </div>
                    <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                      <stat.icon className={`w-6 h-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} style={{ color: stat.color.includes('blue') ? '#3b82f6' : stat.color.includes('green') ? '#22c55e' : stat.color.includes('yellow') ? '#eab308' : '#a855f7' }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-blue-400" />
                  Payment API Configuration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-4">
                  Manage your Xendit API keys and payment gateway settings.
                </p>
                <Link to="/admin/payment-settings">
                  <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                    Configure Payment APIs
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-yellow-400" />
                  Contact Messages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-4">
                  You have {isLoading ? '...' : stats.pendingMessages} pending messages from potential clients.
                </p>
                <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                  View Messages
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}