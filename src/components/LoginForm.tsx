
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from 'lucide-react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div className="w-full max-w-[400px] p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10">
      <h2 className="text-2xl font-semibold text-white mb-6">Login</h2>
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm text-gray-200">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm text-gray-200">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 rounded border-gray-600 bg-white/10"
            />
            <Label htmlFor="remember" className="text-sm text-gray-200">Remember me</Label>
          </div>
          <a href="#" className="text-sm text-blue-400 hover:text-blue-300">
            Forgot password?
          </a>
        </div>
        <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white">
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
