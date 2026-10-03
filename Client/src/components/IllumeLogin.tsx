import { useState } from "react";
import { Eye, EyeOff, Sparkles, Shield } from "lucide-react";

const IllumeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to dashboard on submit
    window.location.href = "/dashboard";
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background image — full bleed */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/illume-bg.png')" }}
      />

      {/* Multi-layer overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(20,5,40,0.75)] via-[rgba(40,20,10,0.55)] to-[rgba(20,5,40,0.7)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] via-transparent to-[rgba(0,0,0,0.2)]" />

      {/* Ambient glow effects */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-[rgba(255,215,0,0.08)] animate-glow-breathe" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[rgba(128,0,255,0.06)] animate-glow-breathe" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[rgba(255,215,0,0.04)] animate-lamp-flicker" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-[440px] px-6 animate-fade-in-up">
        {/* Logo / Medallion */}
        <div className="text-center mb-8">
          {/* Glowing medallion */}
          <div className="inline-flex items-center justify-center mb-5">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-[-12px] rounded-full bg-[rgba(255,215,0,0.12)] blur-xl animate-glow-breathe" />
              {/* Medallion body */}
              <div className="relative w-20 h-20 rounded-full flex items-center justify-center"
                   style={{
                     background: 'linear-gradient(145deg, rgba(255,215,0,0.25), rgba(255,180,0,0.15))',
                     border: '2px solid rgba(255,215,0,0.35)',
                     boxShadow: '0 0 40px rgba(255,215,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2), 0 8px 32px rgba(0,0,0,0.3)'
                   }}>
                <Shield className="w-9 h-9 text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: 'linear-gradient(170deg, #FFD700 15%, #FFF8DC 45%, #FFD700 75%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 8px rgba(255,215,0,0.3))'
              }}>
            Illume
          </h1>
          <p className="text-base font-medium tracking-[0.15em] uppercase"
             style={{
               background: 'linear-gradient(170deg, #d4a853 0%, #f5e6c8 50%, #d4a853 100%)',
               WebkitBackgroundClip: 'text',
               WebkitTextFillColor: 'transparent',
             }}>
            Walk with light. Live with liberty.
          </p>
        </div>

        {/* ═══ Premium Glass Card ═══ */}
        <div className="glass-premium rounded-3xl p-8 md:p-10 animate-border-glow">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-[#FFD700] opacity-70" />
              <h2 className="text-xl font-semibold text-white/95 tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                {isSignUp ? "Join the Circle" : "Welcome Back"}
              </h2>
            </div>
            <p className="text-sm text-white/50 mb-7 ml-6">
              {isSignUp
                ? "Step into a world intelligently illuminated."
                : "Your light awaits."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-[11px] font-semibold text-white/45 mb-2 uppercase tracking-[0.18em]">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@illume.app"
                  className="glass-input w-full px-4 py-3.5 rounded-xl text-white/90 placeholder:text-white/25 focus:outline-none text-sm"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-[11px] font-semibold text-white/45 mb-2 uppercase tracking-[0.18em]">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="glass-input w-full px-4 py-3.5 rounded-xl text-white/90 placeholder:text-white/25 focus:outline-none text-sm pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30 hover:text-[#FFD700] transition-colors duration-300"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {!isSignUp && (
                <div className="flex justify-end">
                  <button type="button" className="text-xs text-[#d4a853] hover:text-[#FFD700] transition-colors duration-300">
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Premium Submit Button */}
              <button
                id="login-submit"
                type="submit"
                className="btn-premium w-full py-4 rounded-xl text-[#1a0a2e] font-bold text-sm tracking-wide relative z-10"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  {isSignUp ? "Enter the Sakhi-Sahayak Circle" : "Enter the Light"}
                </span>
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-7">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              <span className="text-[11px] text-white/30 uppercase tracking-widest">or continue with</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </div>

            {/* Google Sign-in */}
            <button
              id="login-google"
              type="button"
              className="w-full py-3.5 rounded-xl text-white/80 text-sm font-medium flex items-center justify-center gap-3 transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.borderColor = 'rgba(255,215,0,0.25)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
              }}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </button>

            {/* Toggle */}
            <p className="text-center text-sm text-white/35 mt-7">
              {isSignUp ? "Already illuminated?" : "New to the circle?"}{" "}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-[#d4a853] hover:text-[#FFD700] font-semibold transition-colors duration-300"
              >
                {isSignUp ? "Sign in" : "Join now"}
              </button>
            </p>
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="text-center text-xs text-white/25 mt-8 max-w-xs mx-auto leading-relaxed tracking-wide">
          Your silent digital companion. The light follows you.
        </p>
      </div>
    </div>
  );
};

export default IllumeLogin;
