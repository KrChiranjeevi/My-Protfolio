import AOS from "aos";
import "aos/dist/aos.css";
import {
    ExternalLink,
    Github,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    Cpu,
    Code2,
    Globe,
    Layout,
    Database,
    Sparkles
} from "lucide-react";
import { useEffect } from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    displayName: "Let's Connect",
    subText: "on LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/kumar-chiranjeevi-782b77297/",
    color: "#0A66C2",
    gradient: "from-[#0A66C2] to-[#0077B5]",
    isPrimary: true,
  },
  {
    name: "Instagram",
    displayName: "Instagram",
    subText: "@kumar.__l",
    icon: Instagram,
    url: "https://www.instagram.com/kumar.__l/",
    color: "#E4405F",
    gradient: "from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
  },
  {
    name: "GitHub",
    displayName: "Github",
    subText: "@KRChiranjeevi",
    icon: Github,
    url: "https://github.com/KrChiranjeevi",
    color: "#ffffff",
    gradient: "from-[#333] to-[#24292e]",
  },
  {
    name: "Email",
    displayName: "Email Us",
    subText: "krchiranjeevi28@gmail.com",
    icon: Mail,
    url: "mailto:krchiranjeevi28@gmail.com",
    color: "#EA4335",
    gradient: "from-[#EA4335] to-[#DB4437]",
  },
  {
    name: "Phone",
    displayName: "Call Me",
    subText: "+91 9142948372",
    icon: Phone,
    url: "tel:+919142948372",
    color: "#34D399",
    gradient: "from-[#10B981] to-[#059669]",
  }
];

const SocialLinks = () => {
  const linkedIn = socialLinks.find((link) => link.isPrimary);
  const otherLinks = socialLinks.filter((link) => !link.isPrimary);
  const [instagram, github, email, phone] = otherLinks;

  useEffect(() => {
    AOS.init({
      offset: 10,
     
    });
  }, []);

  return (
    <div className="w-full bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 py-8 backdrop-blur-xl">
      <h3
        className="text-xl font-semibold text-white mb-6 flex items-center gap-2"
        data-aos="fade-down" 
      >
        <span className="inline-block w-8 h-1 bg-indigo-500 rounded-full"></span>
        Connect With Me
      </h3>

      <div className="flex flex-col gap-4">
        {/* LinkedIn - Primary Row */}
        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-between p-4 rounded-lg 
                     bg-white/5 border border-white/10 overflow-hidden
                     hover:border-white/20 transition-all duration-500"
          data-aos="fade-up"
          data-aos-delay="100" 
        >
          {/* Hover Gradient Background */}
          <div
            className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                       bg-gradient-to-r ${linkedIn.gradient}`}
          />

          {/* Content Container */}
          <div className="relative flex items-center gap-4">
            {/* Icon Container */}
            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-20 rounded-md transition-all duration-500
                               group-hover:scale-110 group-hover:opacity-30"
                style={{ backgroundColor: linkedIn.color }}
              />
              <div className="relative p-2 rounded-md">
                <linkedIn.icon
                  className="w-6 h-6 transition-all duration-500 group-hover:scale-105"
                  style={{ color: linkedIn.color }}
                />
              </div>
            </div>

            {/* Text Container */}
            <div className="flex flex-col">
              <span className="text-lg font-bold pt-[0.2rem] text-gray-200 tracking-tight leading-none group-hover:text-white transition-colors duration-300">
                {linkedIn.displayName}
              </span>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {linkedIn.subText}
              </span>
            </div>
          </div>

          {/* External Link */}
          <ExternalLink
            className="relative w-5 h-5 text-gray-500 group-hover:text-white
                       opacity-0 group-hover:opacity-100 transition-all duration-300
                       transform group-hover:translate-x-0 -translate-x-1"
          />

          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                               translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
            />
          </div>
        </a>

        {/* Second Row - Instagram, GitHub, Email, Phone */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {[instagram, github, email, phone].map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 p-4 rounded-xl 
                               bg-white/5 border border-white/10 overflow-hidden
                               hover:border-white/20 transition-all duration-500"
              data-aos="fade-up" 
              data-aos-delay={200 + index * 100} 
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500
                                     bg-gradient-to-r ${link.gradient}`}
              />

              <div className="relative flex items-center justify-center">
                <div
                  className="absolute inset-0 opacity-20 rounded-lg transition-all duration-500
                                       group-hover:scale-125 group-hover:opacity-30"
                  style={{ backgroundColor: link.color }}
                />
                <div className="relative p-2 rounded-lg">
                  <link.icon
                    className="w-5 h-5 transition-all duration-500 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {link.displayName}
                </span>
                <span className="text-xs text-gray-400 truncate group-hover:text-gray-300 transition-colors duration-300">
                  {link.subText}
                </span>
              </div>

              <ExternalLink
                className="w-4 h-4 text-gray-500 group-hover:text-white ml-auto
                                       opacity-0 group-hover:opacity-100 transition-all duration-300
                                       transform group-hover:translate-x-0 -translate-x-2"
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"
                />
              </div>
            </a>
          ))}
        </div>

        {/* Tech Animation Container */}
        <div className="w-full mt-4 flex items-center justify-center pr-2" data-aos="fade-up" data-aos-delay="600">
          <div className="relative w-full h-[180px] overflow-hidden rounded-xl border border-white/5 bg-white/5 opacity-90 hover:opacity-100 transition-opacity duration-500 flex items-center justify-center group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/10" />
            
            <div className="relative flex items-center justify-center w-full h-full">
              {/* Central Glowing Core */}
              <div className="absolute flex items-center justify-center animate-pulse-slow">
                <div className="absolute w-16 h-16 bg-[#6366f1] rounded-full blur-xl opacity-50" />
                <div className="absolute w-12 h-12 bg-[#a855f7] rounded-full blur-md opacity-70" />
                <Globe className="w-8 h-8 text-white relative z-10 animate-spin-slower" />
              </div>

              {/* Orbiting Icons */}
              <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
                <div className="absolute top-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite_reverse]">
                  <Code2 className="w-6 h-6 text-blue-400 opacity-80" />
                </div>
                <div className="absolute bottom-[20%] left-[50%] -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite_reverse]">
                  <Cpu className="w-6 h-6 text-purple-400 opacity-80" />
                </div>
                <div className="absolute top-[50%] left-[20%] -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite_reverse]">
                  <Layout className="w-6 h-6 text-pink-400 opacity-80" />
                </div>
                <div className="absolute top-[50%] right-[10%] -translate-x-1/2 -translate-y-1/2 animate-[spin_10s_linear_infinite_reverse]">
                  <Database className="w-6 h-6 text-indigo-400 opacity-80" />
                </div>
              </div>

              {/* Floating Sparkles */}
              <div className="absolute top-4 left-6 animate-bounce-slow">
                <Sparkles className="w-4 h-4 text-yellow-400 opacity-60" />
              </div>
              <div className="absolute bottom-6 right-8 animate-bounce" style={{ animationDuration: '3s' }}>
                <Sparkles className="w-3 h-3 text-cyan-400 opacity-60" />
              </div>
            </div>

            {/* Shine effect on hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-spin-slower {
          animation: spin 8s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-bounce-slow {
          animation: bounce 4s infinite;
        }
      `}</style>
    </div>
  );
};

export default SocialLinks;