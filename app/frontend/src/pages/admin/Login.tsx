import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createClient } from '@metagptx/web-sdk';
import { toast } from 'sonner';
import { Code2, LogIn, ArrowLeft } from 'lucide-react';

const client = createClient();

export default function AdminLogin() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await client.auth.toLogin();
    } catch {
      toast.error('Failed to initiate login. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-slate-950" />
      
      <Card className="w-full max-w-md bg-slate-900 border-slate-800 relative z-10">
        <CardHeader className="text-center">
          <Link to="/" className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Code2 className="w-7 h-7 text-white" />
            </div>
          </Link>
          <CardTitle className="text-2xl font-bold text-white">Admin Login</CardTitle>
          <CardDescription className="text-slate-400">
            Sign in to access the admin dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-slate-300">Email</Label>
              <Input
                type="email"
                placeholder="admin@example.com"
                disabled
                className="bg-slate-800 border-slate-700 text-slate-500 placeholder:text-slate-600"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-slate-300">Password</Label>
              <Input
                type="password"
                placeholder="••••••••"
                disabled
                className="bg-slate-800 border-slate-700 text-slate-500 placeholder:text-slate-600"
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-700" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-slate-900 px-2 text-slate-500">Or continue with</span>
            </div>
          </div>

          <Button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
          >
            {isLoading ? 'Redirecting...' : 'Sign in with SSO'}
            <LogIn className="ml-2 w-4 h-4" />
          </Button>

          <div className="text-center">
            <Link 
              to="/" 
              className="text-sm text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}