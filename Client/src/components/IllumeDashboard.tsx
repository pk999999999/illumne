import { useState } from "react";
import {
  LayoutDashboard,
  Map,
  Users,
  ShieldAlert,
  User,
  LogOut,
  Bell,
  Shield,
  MapPin,
  Navigation,
  Zap,
  ChevronRight,
  Sparkles,
  Activity,
} from "lucide-react";

type SidebarItem = {
  id: string;
  label: string;
  icon: React.ReactNode;
};

const sidebarItems: SidebarItem[] = [
  { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-[18px] h-[18px]" /> },
  { id: "map", label: "Map & Routes", icon: <Map className="w-[18px] h-[18px]" /> },
  { id: "companions", label: "Companions", icon: <Users className="w-[18px] h-[18px]" /> },
  { id: "emergency", label: "Emergency", icon: <ShieldAlert className="w-[18px] h-[18px]" /> },
  { id: "profile", label: "Profile", icon: <User className="w-[18px] h-[18px]" /> },
];

const statCards = [
  {
    label: "SAFE ZONES",
    value: "10",
    icon: <Shield className="w-5 h-5" />,
    iconClass: "stat-icon-green",
    iconColor: "text-emerald-400",
    gradient: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    label: "BLACK SPOTS",
    value: "22",
    icon: <MapPin className="w-5 h-5" />,
    iconClass: "stat-icon-red",
    iconColor: "text-red-400",
    gradient: "from-red-500/20 to-red-500/5",
  },
  {
    label: "COMPANIONS",
    value: "12",
    icon: <Users className="w-5 h-5" />,
    iconClass: "stat-icon-purple",
    iconColor: "text-purple-400",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
];

const tacticalLinks = [
  {
    title: "Secure Path",
    desc: "Plan a journey with real-time safety analysis and AI-powered route optimization.",
    icon: <Navigation className="w-6 h-6" />,
    color: "text-[#FFD700]",
    hoverBorder: "rgba(255,215,0,0.3)",
  },
  {
    title: "Companion Sync",
    desc: "Find verified units for safe group travel with live location sharing.",
    icon: <Users className="w-6 h-6" />,
    color: "text-purple-400",
    hoverBorder: "rgba(168,85,247,0.3)",
  },
  {
    title: "Inertial Watch",
    desc: "Automated SOS if unusual motion or duress patterns are detected by AI.",
    icon: <Zap className="w-6 h-6" />,
    color: "text-amber-400",
    hoverBorder: "rgba(245,158,11,0.3)",
  },
];

const IllumeDashboard = () => {
  const [activeItem, setActiveItem] = useState("dashboard");
  const [hasNotification] = useState(true);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/illume-bg.png')" }}
      />

      {/* Multi-layer overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[rgba(20,5,40,0.72)] via-[rgba(40,20,10,0.50)] to-[rgba(20,5,40,0.65)]" />
      <div className="fixed inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.35)] via-transparent to-[rgba(0,0,0,0.15)]" />

      {/* Ambient glow */}
      <div className="fixed top-[20%] left-[30%] w-[500px] h-[500px] rounded-full bg-[rgba(255,215,0,0.06)] animate-glow-breathe pointer-events-none" />
      <div className="fixed bottom-[20%] right-[20%] w-[400px] h-[400px] rounded-full bg-[rgba(128,0,255,0.05)] animate-glow-breathe pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* ═══ GLASS SIDEBAR ═══ */}
      <aside className="glass-sidebar fixed left-0 top-0 bottom-0 w-[240px] z-30 flex flex-col animate-slide-in-left">
        <div className="relative z-10 flex flex-col h-full">
          {/* Brand */}
          <div className="p-6 pb-4">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                   style={{
                     background: 'linear-gradient(135deg, rgba(239,68,68,0.8), rgba(220,38,38,0.9))',
                     boxShadow: '0 4px 12px rgba(239,68,68,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                   }}>
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-white font-bold text-sm tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  Sakhi-Sahayak
                </h2>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="mx-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Nav Items */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {sidebarItems.map((item, i) => (
              <button
                key={item.id}
                id={`sidebar-${item.id}`}
                onClick={() => setActiveItem(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group animate-fade-in-up`}
                style={{
                  animationDelay: `${(i + 1) * 80}ms`,
                  background: activeItem === item.id
                    ? 'linear-gradient(135deg, rgba(255,215,0,0.12), rgba(255,215,0,0.04))'
                    : 'transparent',
                  border: activeItem === item.id ? '1px solid rgba(255,215,0,0.15)' : '1px solid transparent',
                  color: activeItem === item.id ? '#FFD700' : 'rgba(255,255,255,0.55)',
                }}
              >
                <span className={`transition-all duration-300 ${activeItem === item.id ? 'text-[#FFD700] drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]' : 'text-white/40 group-hover:text-white/70'}`}>
                  {item.icon}
                </span>
                <span className={`transition-all duration-300 ${activeItem === item.id ? '' : 'group-hover:text-white/80'}`}>
                  {item.label}
                </span>
                {activeItem === item.id && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#FFD700] shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
                )}
              </button>
            ))}
          </nav>

          {/* Separator */}
          <div className="mx-5 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Logout */}
          <div className="p-3 pb-6">
            <button
              id="sidebar-logout"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400/70 hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 group"
            >
              <LogOut className="w-[18px] h-[18px] group-hover:translate-x-[-2px] transition-transform duration-300" />
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* ═══ MAIN CONTENT ═══ */}
      <main className="relative z-10 ml-[240px] flex-1 p-6 md:p-8 overflow-y-auto min-h-screen">
        {/* ── Top Header Bar ── */}
        <div className="glass-premium rounded-2xl p-6 mb-6 animate-fade-in-up">
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-[11px] text-emerald-400 font-semibold uppercase tracking-widest">Live Portal</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                Hello, <span className="text-gradient-purple-gold">Priya Sharma</span>
              </h1>
              <p className="text-sm text-white/45 flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
                Nagpur is looking stable. AI Monitoring Active.
              </p>
            </div>

            {/* Notification bell */}
            <button id="notification-bell" className="relative p-3 rounded-xl glass-card-premium group">
              <Bell className="w-5 h-5 text-white/60 group-hover:text-[#FFD700] transition-colors duration-300" />
              {hasNotification && (
                <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)] animate-pulse" />
              )}
            </button>
          </div>
        </div>

        {/* ── Portal Title ── */}
        <div className="text-center mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <h2 className="text-lg font-semibold tracking-wide"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: 'linear-gradient(135deg, #c084fc 0%, #FFD700 50%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 4px rgba(128,0,255,0.2))'
              }}>
            Sakhi-Sahayak Portal — Priya's Journey
          </h2>
          <div className="flex items-center justify-center gap-1 mt-1">
            <Sparkles className="w-3 h-3 text-[#FFD700]/50" />
            <span className="text-[11px] text-white/30 tracking-widest uppercase">Powered by Illume AI</span>
            <Sparkles className="w-3 h-3 text-[#FFD700]/50" />
          </div>
        </div>

        {/* ── Stat Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {statCards.map((card, i) => (
            <div
              key={card.label}
              className="glass-card-premium rounded-2xl p-5 animate-fade-in-up cursor-default group"
              style={{ animationDelay: `${(i + 2) * 100}ms` }}
            >
              <div className="relative z-10 flex items-center gap-4">
                <div className={`${card.iconClass} w-12 h-12 rounded-xl flex items-center justify-center ${card.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                  {card.icon}
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-white tracking-tight" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {card.value}
                  </div>
                  <div className="text-[11px] font-bold text-white/40 uppercase tracking-[0.15em]">
                    {card.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Tactical Links Section ── */}
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-[#FFD700]/20 to-transparent" />
            <h3 className="text-sm font-bold text-white/50 uppercase tracking-[0.2em]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Tactical Links
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-[#FFD700]/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tacticalLinks.map((link, i) => (
              <button
                key={link.title}
                id={`tactical-${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="glass-card-premium rounded-2xl p-5 text-left animate-fade-in-up group"
                style={{ animationDelay: `${(i + 5) * 100}ms` }}
              >
                <div className="relative z-10">
                  <div className={`${link.color} mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_currentColor]`}>
                    {link.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white/90 mb-1.5 flex items-center gap-2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {link.title}
                    <ChevronRight className="w-3.5 h-3.5 text-white/20 group-hover:text-[#FFD700] group-hover:translate-x-1 transition-all duration-300" />
                  </h4>
                  <p className="text-xs text-white/35 leading-relaxed line-clamp-2">
                    {link.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ── Quick Status Footer ── */}
        <div className="glass-premium rounded-2xl p-5 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                   style={{
                     background: 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(34,197,94,0.05))',
                     border: '1px solid rgba(34,197,94,0.15)'
                   }}>
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white/60">System Status</p>
                <p className="text-[11px] text-emerald-400/80">All modules operational • Last sync 2m ago</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_4px_rgba(34,197,94,0.5)]" />
              <span className="text-[11px] text-white/30 font-medium">LIVE</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IllumeDashboard;
