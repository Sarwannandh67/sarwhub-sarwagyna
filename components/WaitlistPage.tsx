import React, { useState } from 'react';
import { SparklesCore } from './ui/sparkles.tsx';
import { ShieldCheckIcon, LightningIcon } from './Icons.tsx';

interface WaitlistPageProps {
  onUnlock: () => void;
}

const WaitlistPage: React.FC<WaitlistPageProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toUpperCase() === 'SARWHUB') {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="h-screen w-screen bg-black flex flex-col items-center justify-center overflow-hidden relative">
      {/* Premium Background */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticles-waitlist"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={80}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={0.5}
        />
      </div>

      <div className="relative z-10 w-[90%] max-w-md animate-in fade-in zoom-in duration-1000">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black font-bold text-4xl mx-auto mb-8 shadow-[0_0_30px_rgba(255,255,255,0.3)]">
            S
          </div>
          <h1 className="text-4xl md:text-5xl font-normal tracking-tighter mb-4">
            Private <span className="metal italic">Preview</span>
          </h1>
          <p className="text-white/40 text-sm font-medium uppercase tracking-[0.3em]">
            Access Restricted
          </p>
        </div>

        <div className="glass p-10 rounded-[40px] border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-2">
                Enter Gateway Key
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full bg-white/5 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-2xl p-4 text-center text-xl tracking-[0.5em] focus:border-white/40 focus:bg-white/10 outline-none transition-all duration-300`}
                autoFocus
              />
              {error && (
                <p className="text-red-500/70 text-[10px] font-bold uppercase tracking-widest text-center animate-bounce mt-2">
                  Incorrect Access Key
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-white text-black rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:scale-[1.02] transition-all shadow-xl shadow-white/5 flex items-center justify-center gap-3"
            >
              Unlock Access
              <LightningIcon />
            </button>
          </form>
        </div>

        <div className="mt-12 flex justify-center items-center gap-8 opacity-20">
          <div className="flex items-center gap-2">
            <ShieldCheckIcon />
            <span className="text-[8px] font-bold uppercase tracking-widest">Secure Entry</span>
          </div>
          <div className="w-px h-4 bg-white/30"></div>
          <p className="text-[8px] font-bold uppercase tracking-widest">
            SarwHub Platform 2026
          </p>
        </div>
      </div>

      {/* Subtle Gradients */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white/[0.02] to-transparent pointer-events-none"></div>
    </div>
  );
};

export default WaitlistPage;