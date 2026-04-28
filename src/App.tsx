import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, animate } from 'motion/react';
import { X, ArrowRight, Sparkles, Scissors, Video, ChevronDown, ChevronUp } from 'lucide-react';

// === CUSTOM CURSOR ===
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia("(hover: none)").matches) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, [role="button"], .cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  if (window.matchMedia("(hover: none)").matches) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-neutral-900 pointer-events-none z-[9999] mix-blend-difference hidden lg:block"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 2 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-neutral-900/40 pointer-events-none z-[9998] hidden lg:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.8 }}
      />
    </>
  );
};

// === DATA ===
const OTHER_WORKS_DATA = [
  {
    id: 1,
    title: "游戏短片音效设计",
    desc: "针对短片经典的西部片视听风格，本次音效设计的核心在于“蓄势”。我通过风沙等环境音铺陈荒野的孤寂感，并对枪械的机械声进行了细腻处理。利用高潮对决前极致的“声音留白”，将双方对峙的紧张氛围推向顶峰。",
    date: "2026.04",
    status: "done",
    mediaType: "video",
    source: "/reunion_1.mp4",
    preview: "/reunion.jpg"
  },
  {
    id: 2,
    title: "花海列车",
    desc: "通过blender制作基础场景，并通过花海的超现实设计表现出了梦境般的氛围",
    date: "2026.04",
    status: "done",
    mediaType: "video",
    source: "",
    bvid: "BV1ZT421m7tj",
    preview: "/contrast.png"
  },
  {
    id: 3,
    title: "风格化场景",
    desc: "风格化的龙卷风，通过ae制作",
    date: "2026.04",
    status: "done",
    mediaType: "video",
    source: "/sudden_rain.mp4",
    preview: "/sudden_rain.png"
  },
  {
    id: 4,
    title: "正在制作ing",
    desc: "敬请期待...",
    date: "2026.04",
    status: "wip",
    mediaType: "audio",
    source: "",
    preview: ""
  }
];

const WORKS = [
  { id: 1, title: '春岚', category: 'Music PV', year: '2025', preview: '/haruarashi.png', bvid: 'BV1HCdzBQEtw' },
  { id: 2, title: 'NO TITLE', category: 'MUSIC PV', year: '2024', preview: '/notitle.png', bvid: 'BV1VaJzzYEkn' },
  { id: 3, title: '異說彼岸花', category: 'PV', year: '2024', preview: '/lycoris.png', bvid: 'BV1hrhVzDE1h' },
  { id: 4, title: '圆', category: 'MG动画', year: '2023', preview: '/circle.png', bvid: 'BV18MAQzSETe' },
  { id: 5, title: '方', category: 'MG动画', year: '2022', preview: '/square.png', bvid: 'BV1vCcXzoEHg' },
];

const EFFECTS = [
  { id: 1, title: '花', video: 'flower' },
  { id: 2, title: '星空背景', video: 'starry_sky' },
  { id: 3, title: 'CANDY风', video: 'candy_style' },
  { id: 4, title: '黑洞', video: 'black_hole' },
  { id: 5, title: '地球', video: 'earth' },
];

const TIMELINE = [
  { 
    year: '2025.2 - 2025.9',
    role: '内容运营与视觉策划', 
    company: '常州爱画文化艺术有限公司', 
    desc: [
      { title: '全平台视觉管理', content: '负责抖音、B站、小红书等账号的短视频运营及内容编辑。通过优化推送排版与文案逻辑，提升了账号的整体审美表现力。' },
      { title: '项目统筹与私域维护', content: '跟进“青年夜校”项目，负责品牌宣传及视觉物料的跟进工作。' }
    ]
  },
  { 
    year: '2023.12 - 2024.7',
    role: '品牌视觉辅助', 
    company: '常州酒到家食品 / 哈妮叁商贸', 
    desc: [
      { title: '产品影像美化', content: '负责商品拍摄及后期图片处理，通过精准的视觉优化提升商品在电商平台的曝光度与转化率。' }
    ]
  },
  { 
    year: '2021 - 2022',
    role: '账号运营与数据分析', 
    company: '南传吧务组（校内经历）', 
    desc: [
      { title: '视觉驱动增长', content: '主导“南广吧务组”等官方账号的内容策划。通过重构视觉设计与内容形式，显著提升了内容的吸引力与用户互动率。' },
      { title: '商务谈判与协作', content: '曾担任学生会外联干事，成功为校级活动筹集 1w+ 赞助资金，具备出色的跨团队协作与项目推进能力。' }
    ]
  },
];

// === PRELOADER ===
const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => { setTimeout(onComplete, 2500); }, [onComplete]);
  return (
    <motion.div className="fixed inset-0 bg-[#fafafa] z-[100] flex flex-col items-center justify-center p-8 text-neutral-900" exit={{ opacity: 0 }}>
      <motion.div initial={{ width: 0 }} animate={{ width: "200px" }} transition={{ duration: 1.5, ease: "easeInOut" }} className="h-[1px] bg-neutral-900/40 mb-8" />
      <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1 }} className="text-[11px] md:text-xs font-medium tracking-[0.5em] uppercase text-center font-mono text-neutral-500">
        Loading Exhibition
      </motion.h1>
    </motion.div>
  );
};

// === GLOBAL BACKGROUND COMPONENT ===
const GlobalBackground = () => {
  return (
    <div 
      className="fixed inset-0 z-[-1] pointer-events-none transition-colors duration-1000 bg-[#fbfbfb] overflow-hidden" 
    >
        {/* Very Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-color-burn" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
};

// === HERO SECTION COMPONENT ===
const HeroSection = () => {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden snap-start shrink-0 flex items-center">
      
      {/* Typography Container - Left Aligned */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 flex flex-col items-start mt-[-5vh]">
          
          <div className="flex flex-col text-neutral-900 transform -translate-y-4 items-start w-full gap-2 relative">
             
             <div className="overflow-hidden mb-2 md:mb-4">
                <motion.h1 
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[4.5vw] md:text-[2vw] font-display font-medium leading-none tracking-[0.4em] text-left uppercase pl-1 md:pl-2 text-neutral-500"
                >
                   Hello, I'm
                </motion.h1>
             </div>
             <div className="overflow-hidden flex items-end pt-2 pb-6">
                <motion.h1 
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[32vw] md:text-[18vw] font-serif font-black leading-none tracking-tight text-left text-neutral-900 drop-shadow-sm pr-12"
                >
                   王坤
                </motion.h1>
             </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-6 md:mt-12 max-w-lg md:max-w-xl border-l-[2px] border-neutral-900/40 pl-5 md:pl-8 text-left"
          >
            <p className="font-mono text-[9px] md:text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-medium mb-3">
               Visual Design / AE Motion Graphics / 3D Visual Exploration
            </p>
            <p className="font-sans text-sm md:text-base leading-relaxed font-light text-neutral-700 tracking-widest">
               视觉设计 / AE 动态图形 / 3D 视觉探索
            </p>
          </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex flex-col items-center gap-4 text-neutral-400"
      >
         <span className="font-mono text-[9px] uppercase tracking-[0.3em] origin-left rotate-90 translate-y-12 translate-x-3 mb-12 text-neutral-400">Scroll to Explore</span>
         <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-neutral-300 to-transparent"
         />
      </motion.div>

    </section>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<'home' | 'project' | 'gifs'>('home');
  const [selectedWorkId, setSelectedWorkId] = useState<number | null>(null);
  const [selectedAudioId, setSelectedAudioId] = useState<number | null>(null);
  const [fullscreenGif, setFullscreenGif] = useState<number | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);

  const mainContainerRef = useRef<HTMLDivElement>(null);
  const scrollAnimationRef = useRef<number | null>(null);

  const startContinuousScroll = (direction: -1 | 1) => {
    let startTime = performance.now();
    const scrollStep = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      // Ramp up speed over 1000ms (1 second)
      const progress = Math.min(elapsed / 1000, 1);
      // Quadratic ease-in for noticeably smooth acceleration
      const acceleration = progress * progress;

      // Starts at 2px/frame (very slow), maxes out at 10px/frame (comfortable speed)
      const minSpeed = 2;
      const maxSpeed = 10;
      const currentSpeed = minSpeed + (maxSpeed - minSpeed) * acceleration;

      if (mainContainerRef.current) {
        mainContainerRef.current.scrollTop += direction * currentSpeed;
      }
      scrollAnimationRef.current = requestAnimationFrame(scrollStep);
    };
    scrollAnimationRef.current = requestAnimationFrame(scrollStep);
  };

  const stopContinuousScroll = () => {
    if (scrollAnimationRef.current !== null) {
      cancelAnimationFrame(scrollAnimationRef.current);
      scrollAnimationRef.current = null;
    }
  };

  // Elegant programmatic scroll-snapping logic
  useEffect(() => {
    const el = mainContainerRef.current;
    if (!el || currentView !== 'home') return;

    let scrollTimeout: any;
    let activeAnimation: any;

    const handleWheelOrTouch = () => {
      // User intent breaks the gentle snap animation
      if (activeAnimation) {
        activeAnimation.stop();
        activeAnimation = null;
      }
    };

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Find nearest matching section
        const sections = el.querySelectorAll('section');
        let closest: HTMLElement | null = null;
        let minDistance = Infinity;

        sections.forEach((sec) => {
          const rect = sec.getBoundingClientRect();
          const dist = Math.abs(rect.top); // Distance to top of viewport
          if (dist < minDistance) {
            minDistance = dist;
            closest = sec;
          }
        });

        // Only apply JS snap scrolling if we are on a desktop window (prevents impossible scroll traps on tall elements in mobile)
        if (window.innerWidth >= 1024 && closest && minDistance > 5) {
          const targetY = (closest as HTMLElement).offsetTop;
          activeAnimation = animate(el.scrollTop, targetY, {
            onUpdate: (v) => { el.scrollTop = v; },
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1] // Exponential ultra-smooth easeOut
          });
        }
      }, 350); // Generous delay to ensure user completely stopped dragging/scrolling
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    el.addEventListener("wheel", handleWheelOrTouch, { passive: true });
    el.addEventListener("touchstart", handleWheelOrTouch, { passive: true });
    
    return () => {
      el.removeEventListener("scroll", handleScroll);
      el.removeEventListener("wheel", handleWheelOrTouch);
      el.removeEventListener("touchstart", handleWheelOrTouch);
      if (activeAnimation) activeAnimation.stop();
    };
  }, [currentView]);

  if (loading) return <Preloader onComplete={() => setLoading(false)} />;

  return (
    <>
    <CustomCursor />
    {/* Floating Scroll Controls for Mobile */}
    <div className="lg:hidden fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-[999] pointer-events-auto flex flex-col gap-3">
      <button 
        onPointerDown={(e) => { e.preventDefault(); startContinuousScroll(-1); }}
        onPointerUp={stopContinuousScroll}
        onPointerLeave={stopContinuousScroll}
        onPointerCancel={stopContinuousScroll}
        onContextMenu={(e) => e.preventDefault()}
        className="w-12 h-12 bg-neutral-900/80 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-lg border border-white/20 hover:bg-neutral-900 transition-colors active:scale-95 touch-none select-none"
      >
        <ChevronUp size={24} />
      </button>
      <button 
        onPointerDown={(e) => { e.preventDefault(); startContinuousScroll(1); }}
        onPointerUp={stopContinuousScroll}
        onPointerLeave={stopContinuousScroll}
        onPointerCancel={stopContinuousScroll}
        onContextMenu={(e) => e.preventDefault()}
        className="w-12 h-12 bg-neutral-900/80 backdrop-blur-md text-white rounded-full flex items-center justify-center shadow-lg border border-white/20 hover:bg-neutral-900 transition-colors active:scale-95 touch-none select-none"
      >
        <ChevronDown size={24} />
      </button>
    </div>

    {/* TOP NAVIGATION MENU */}
    {currentView === 'home' && (
      <nav className="hidden md:flex fixed top-6 right-6 md:top-8 md:right-12 z-[60] flex-wrap justify-end items-center gap-3 max-w-[80vw]">
          <button onClick={() => { document.querySelector('#about')?.scrollIntoView({behavior: 'smooth', block: 'start'}) }} className="px-5 py-2 border border-neutral-200 bg-white rounded-full text-[11px] text-neutral-600 hover:text-neutral-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 tracking-widest shadow-md font-medium">自我介绍</button>
          <button onClick={() => { document.querySelector('#effects-focus')?.scrollIntoView({behavior: 'smooth', block: 'center'}) }} className="px-5 py-2 border border-neutral-200 bg-white rounded-full text-[11px] text-neutral-600 hover:text-neutral-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 tracking-widest shadow-md font-medium">效果练习</button>
          <button onClick={() => { 
            const el = document.querySelector('#pv-focus');
            const container = document.querySelector('.overflow-y-auto'); // our main scrolling container
            if (el && container) {
                const rect = el.getBoundingClientRect();
                const isMobile = window.innerWidth < 1024;
                const shiftY = isMobile ? window.innerHeight * 0.1 : 200;
                const visualCenterFromViewportTop = rect.top + rect.height / 2 + shiftY;
                const offset = visualCenterFromViewportTop - window.innerHeight / 2;
                container.scrollBy({ top: offset, behavior: 'smooth' });
            }
          }} className="px-5 py-2 border border-neutral-200 bg-white rounded-full text-[11px] text-neutral-600 hover:text-neutral-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 tracking-widest shadow-md font-medium">PV练习</button>
          <button onClick={() => { document.querySelector('#other-work-1')?.scrollIntoView({behavior: 'smooth', block: 'center'}) }} className="px-5 py-2 border border-neutral-200 bg-white rounded-full text-[11px] text-neutral-600 hover:text-neutral-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 tracking-widest shadow-md font-medium">其他作品</button>
          <button onClick={() => setShowContactModal(true)} className="px-6 py-2 border border-neutral-200 bg-white rounded-full text-[11px] text-neutral-600 hover:text-neutral-900 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 tracking-widest shadow-md font-medium hidden lg:block">联系我</button>
      </nav>
    )}

    {/* CONTACT MODAL */}
    <AnimatePresence>
      {showContactModal && (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.4 } }}
          className="fixed inset-0 z-[100] bg-white/80 flex items-center justify-center p-6"
          onClick={() => setShowContactModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white/80 backdrop-blur-2xl border border-white rounded-[2rem] p-10 md:p-16 w-full max-w-lg shadow-[0_20px_80px_rgba(0,0,0,0.1)] flex flex-col gap-8 relative text-center"
          >
            <button 
              onClick={() => setShowContactModal(false)} 
              className="absolute top-6 right-6 p-3 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors z-50 text-neutral-600 hover:text-neutral-900"
            >
              <X size={20} />
            </button>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 font-display">联系方式</h3>
              <p className="text-[10px] font-mono text-neutral-400 tracking-[0.4em] uppercase">Contact Information</p>
            </div>
            
            <div className="flex flex-col gap-6 mt-4">
              <div className="flex flex-col items-center gap-1">
                 <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Phone</span>
                 <p className="text-xl md:text-2xl font-medium text-neutral-900">13275235537</p>
              </div>
              <div className="w-12 h-px bg-neutral-200 mx-auto"></div>
              <div className="flex flex-col items-center gap-1">
                 <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">Email</span>
                 <a href="mailto:hanamihuajian@163.com" className="text-xl md:text-2xl font-medium text-neutral-900 hover:underline underline-offset-4 decoration-neutral-300">hanahuajian@163.com</a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* MODAL / FULLSCREEN VIDEO PLAYER */}
    <AnimatePresence>
      {selectedWorkId && (() => {
        const work = WORKS.find(w => w.id === selectedWorkId);
        return (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.4 } }}
            className="fixed inset-0 z-[100] bg-white/95 flex flex-col items-center justify-center p-4 md:p-8 lg:p-12 overflow-hidden"
          >
            {/* Top Bar Navigation / Close */}
            <motion.div 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-0 w-full px-6 py-6 md:px-12 md:py-8 flex justify-between items-center z-50 pointer-events-none"
            >
               <div className="text-neutral-900/50 text-xs md:text-sm tracking-[0.3em] uppercase font-light hidden md:block">
                  Playback Focus Mode
               </div>
               <button onClick={() => setSelectedWorkId(null)} className="pointer-events-auto group p-3 md:p-4 bg-neutral-900/5 hover:bg-neutral-900/10 border border-neutral-900/10 rounded-full transition-all duration-300 backdrop-blur-md ml-auto">
                 <X size={24} className="text-neutral-900/70 group-hover:text-neutral-900 group-hover:rotate-90 transition-transform duration-500" />
               </button>
            </motion.div>

            {/* Video Container Wrapper - centered vertically with dynamic max-size limits */}
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.1 }}
              className="bg-black relative flex items-center justify-center rounded-xl md:rounded-2xl overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.15)] ring-1 ring-neutral-900/10 w-full aspect-video z-40"
              style={{ 
                maxHeight: "calc(100vh - 240px)", 
                maxWidth: "calc((100vh - 240px) * 16 / 9)" 
              }}
            >
               {work?.bvid ? (
                 <iframe 
                   src={`//player.bilibili.com/player.html?bvid=${work.bvid}&page=1&autoplay=1&high_quality=1&danmaku=0&t=0.01`} 
                   scrolling="no" 
                   frameBorder="0" 
                   allowFullScreen={true} 
                   className="w-full h-full object-contain bg-black"
                 ></iframe>
               ) : (
                 <video 
                   src={`/${work?.title}.mp4`}
                   className="w-full h-full object-contain bg-black"
                   controls
                   autoPlay
                   playsInline
                   preload="auto"
                 />
               )}
            </motion.div>

            {/* Bottom Info Bar */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 w-full px-6 py-6 md:px-12 md:py-10 flex justify-between items-end md:items-center z-50 pointer-events-none bg-gradient-to-t from-white/80 to-transparent"
            >
               <div className="flex flex-col gap-1 md:gap-2">
                 <h2 className="text-2xl md:text-5xl font-bold text-neutral-900 tracking-tight drop-shadow-sm">{work?.title}</h2>
                 <div className="flex items-center gap-3 text-neutral-900/60 text-[10px] md:text-sm tracking-widest uppercase">
                   <span className="text-neutral-900/90 font-medium">{work?.category}</span>
                 </div>
               </div>
            </motion.div>
          </motion.div>
        );
      })()}
    </AnimatePresence>

    {/* AUDIO WORKS MODAL */}
    <AnimatePresence>
      {selectedAudioId && (() => {
         const item = OTHER_WORKS_DATA.find(w => w.id === selectedAudioId) || OTHER_WORKS_DATA[0];
         return (
        <motion.div
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)", transition: { duration: 0.4 } }}
          className="fixed inset-0 z-[100] bg-white/95 flex items-center justify-center p-6 md:p-12 overflow-hidden"
          onClick={() => setSelectedAudioId(null)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white/80 backdrop-blur-3xl border border-white rounded-[2.5rem] p-4 md:p-6 w-full max-w-7xl shadow-[0_30px_100px_rgba(0,0,0,0.1)] flex flex-col gap-0 relative h-[90vh] md:h-[85vh] overflow-hidden"
          >
            <button 
              onClick={() => setSelectedAudioId(null)} 
              className="absolute top-8 right-8 p-3 bg-neutral-900/10 hover:bg-neutral-900/20 backdrop-blur-md rounded-full transition-colors z-50 group"
            >
              <X size={24} className="text-neutral-900/70 group-hover:text-neutral-900" />
            </button>
            
            <div className="w-full h-full bg-neutral-100/50 rounded-[1.5rem] flex flex-col items-center justify-center relative overflow-hidden shadow-inner border border-neutral-200">
               {item.bvid ? (
                 <iframe 
                   src={`//player.bilibili.com/player.html?bvid=${item.bvid}&page=1&autoplay=1&high_quality=1&danmaku=0&t=0.01`} 
                   scrolling="no" 
                   frameBorder="0" 
                   allowFullScreen={true} 
                   className="w-full h-full object-contain bg-black"
                 ></iframe>
               ) : item.mediaType === 'video' && item.source ? (
                 <video src={item.source} controls autoPlay className="w-full h-full object-contain bg-black" />
               ) : (
                 <>
                   <div className="text-neutral-900/10 tracking-[0.3em] uppercase text-xl md:text-5xl font-mono font-bold blur-[1px]">Track {item.id}</div>
                   
                   {/* Interactive Visual Overlay */}
                   <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 md:pb-10 bg-gradient-to-t from-white via-white/80 to-transparent flex flex-col">
                      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                         <div>
                           <span className="text-sm font-mono text-neutral-500 tracking-widest uppercase mb-2 block">Original Audio Track</span>
                           <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 tracking-tight drop-shadow-sm">{item.title}</h3>
                         </div>
                      </div>
                      
                      <audio controls autoPlay className="w-full h-12 custom-audio-player" src={item.source || `/audio-placeholder-${item.id}.mp3`}></audio>
                   </div>
                 </>
               )}
            </div>
          </motion.div>
        </motion.div>
        );
      })()}
    </AnimatePresence>

    {/* GIF FULLSCREEN OVERLAY */}
    <AnimatePresence>
       {fullscreenGif !== null && (
          <motion.div
             initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
             animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
             exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
             className="fixed inset-0 z-[120] bg-white/90 flex flex-col items-center justify-center p-6 md:p-12 cursor-zoom-out"
             onClick={() => setFullscreenGif(null)}
          >
             <button onClick={() => setFullscreenGif(null)} className="absolute top-8 right-8 p-4 hover:rotate-90 transition-transform bg-neutral-900/10 text-neutral-900 hover:bg-neutral-900/20 rounded-full backdrop-blur-md"><X size={24} /></button>
             <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="w-full max-w-5xl aspect-video rounded-xl shadow-[0_30px_100px_rgba(0,0,0,0.15)] ring-1 ring-neutral-900/10 pointer-events-none overflow-hidden bg-black"
             >
                <video 
                  src={`/${EFFECTS.find(e => e.id === fullscreenGif)?.video}.mp4`} 
                  className="w-full h-full object-contain" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
             </motion.div>
             <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-8 text-neutral-400 tracking-[0.5em] uppercase text-xs font-bold">
                CLICK ANYWHERE TO CLOSE
             </motion.p>
          </motion.div>
       )}
    </AnimatePresence>

    <GlobalBackground />
    <div ref={mainContainerRef} className="text-neutral-900 min-h-screen font-sans h-screen overflow-y-auto overflow-x-hidden w-full transition-colors duration-1000 relative">
      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <motion.div key="home" exit={{ opacity: 0, transition: { duration: 0.5 } }}>
            {/* HERO SECTION */}
            <HeroSection />

            {/* ABOUT & TIMELINE SECTION (自我介绍) */}
            <section id="about" className="relative w-full min-h-screen py-24 md:py-32 flex flex-col justify-start snap-start shrink-0">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 w-full xl:-translate-x-[400px] transition-transform relative"
              >
                <p className="font-mono text-[11px] md:text-[13px] tracking-[0.4em] text-neutral-400 mb-6 uppercase">— 01 About —</p>
                <h2 className="text-[40px] sm:text-[50px] md:text-[72px] lg:text-[84px] leading-[1.05] font-black tracking-tight font-display text-neutral-900">自我介绍</h2>
              </motion.div>
              <div className="relative w-full max-w-7xl mx-auto px-6 flex-1 flex flex-col xl:flex-row gap-16 xl:gap-24">
                {/* Left Profile */}
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="xl:w-4/12 xl:-translate-x-[200px] transition-transform"
                >
                  <div className="xl:sticky xl:top-32 flex flex-col gap-10">
                    <div className="w-56 h-56 md:w-64 md:h-64 overflow-hidden rounded-[2.5rem] bg-neutral-100 border-4 border-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] mx-auto md:mx-0 relative group">
                       <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors duration-500 z-10 mix-blend-overlay"></div>
                       <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-4xl font-serif font-black tracking-tight text-neutral-900 mb-8">王坤</h2>
                    
                    {/* Desktop aligned table view */}
                    <div className="hidden lg:grid grid-cols-[auto_auto_1fr] gap-x-5 gap-y-3 mb-10 w-full text-left items-baseline">
                       <span className="text-neutral-900 font-bold whitespace-nowrap text-[15px] tracking-widest">上海师范大学</span>
                       <span className="text-neutral-600 font-medium whitespace-nowrap text-[14px] tracking-wider">戏剧与影视<span className="text-[12px]">（硕士在读）</span></span>
                       <div className="flex items-center text-neutral-600 font-mono text-[13px] justify-self-end font-medium">
                         <div className="w-[38px] flex justify-between"><span>2</span><span>0</span><span>2</span><span>5</span></div>
                         <div className="w-[20px] flex justify-center text-neutral-400">-</div>
                         <div className="w-[38px] flex justify-between"><span>至</span><span>今</span></div>
                       </div>

                       <span className="text-neutral-900 font-bold whitespace-nowrap text-[15px] tracking-widest">南京传媒学院</span>
                       <span className="text-neutral-600 font-medium whitespace-nowrap text-[14px] tracking-wider">动画（三维）<span className="text-[12px]">（本科）</span></span>
                       <div className="flex items-center text-neutral-600 font-mono text-[13px] justify-self-end font-medium">
                         <div className="w-[38px] flex justify-between"><span>2</span><span>0</span><span>2</span><span>0</span></div>
                         <div className="w-[20px] flex justify-center text-neutral-400">-</div>
                         <div className="w-[38px] flex justify-between"><span>2</span><span>0</span><span>2</span><span>4</span></div>
                       </div>
                    </div>

                    {/* Mobile/Tablet fallback */}
                    <div className="flex lg:hidden flex-col gap-5 mb-8 w-full text-left mx-auto">
                       <div className="flex flex-col gap-2 text-[13px]">
                         <div className="flex justify-between items-baseline font-bold text-neutral-900 tracking-widest text-[15px]">
                           <span>上海师范大学</span>
                           <div className="flex items-center font-mono font-medium text-neutral-500 text-[11px]">
                             <div className="w-[32px] flex justify-between"><span>2</span><span>0</span><span>2</span><span>5</span></div>
                             <div className="w-[16px] flex justify-center text-neutral-400">-</div>
                             <div className="w-[32px] flex justify-between"><span>至</span><span>今</span></div>
                           </div>
                         </div>
                         <div className="text-neutral-600 tracking-wider font-medium text-[14px]">戏剧与影视（硕士在读）</div>
                       </div>
                       <div className="flex flex-col gap-2 text-[13px]">
                         <div className="flex justify-between items-baseline font-bold text-neutral-900 tracking-widest text-[15px]">
                           <span>南京传媒学院</span>
                           <div className="flex items-center font-mono font-medium text-neutral-500 text-[11px]">
                             <div className="w-[32px] flex justify-between"><span>2</span><span>0</span><span>2</span><span>0</span></div>
                             <div className="w-[16px] flex justify-center text-neutral-400">-</div>
                             <div className="w-[32px] flex justify-between"><span>2</span><span>0</span><span>2</span><span>4</span></div>
                           </div>
                         </div>
                         <div className="text-neutral-600 tracking-wider font-medium text-[14px]">动画（三维）（本科）</div>
                       </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 md:gap-3 justify-center md:justify-start pt-1 md:pt-0">
                      {[
                        { name: '视频特效', icon: Sparkles },
                        { name: '后期编辑', icon: Scissors },
                        { name: '内容创作', icon: Video }
                      ].map(skill => (
                        <div key={skill.name} className="group flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 border border-neutral-300 rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-300 cursor-default shadow-sm hover:shadow-md bg-white shrink-0">
                          <skill.icon className="w-3 h-3 md:w-3.5 md:h-3.5 group-hover:text-white transition-colors" />
                          <span className="text-[10px] md:text-sm font-medium whitespace-nowrap">{skill.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pro Skills Detailed Description */}
                    <div className="mt-8 md:mt-10 flex flex-col gap-4 md:gap-5 text-left border-t border-neutral-200 pt-6 md:pt-8 w-full">
                       <p className="text-[13px] md:text-sm text-neutral-600 leading-relaxed">
                          <span className="font-bold text-neutral-900 tracking-widest">后期特效合成：</span>
                          熟练使用AE进行快节奏文字 PV、MG 动画及视觉特效制作。
                       </p>
                       <p className="text-[13px] md:text-sm text-neutral-600 leading-relaxed">
                          <span className="font-bold text-neutral-900 tracking-widest">三维建模渲染：</span>
                          掌握 C4D、Blender、Maya 及 UE5，具备三维建模、材质表现及动画制作能力。
                       </p>
                       <p className="text-[13px] md:text-sm text-neutral-600 leading-relaxed">
                          <span className="font-bold text-neutral-900 tracking-widest">影像后期编辑：</span>
                          精通 PR、PS、AU 及 AN，能够独立完成从分镜规划到影音合成的全流程创作。
                       </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              {/* Right Timeline */}
              <div className="xl:w-8/12 flex flex-col gap-8 md:gap-16 relative xl:-mt-[200px]">
                <div className="absolute left-[27px] top-4 bottom-4 w-[1px] bg-neutral-200 -z-10 hidden md:block"></div>
                {TIMELINE.map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                    key={i} 
                    className="flex gap-4 md:gap-10 relative group items-start"
                  >
                    <div className="relative z-10 flex-col items-center mt-8 hidden md:flex">
                       <div className="w-4 h-4 rounded-full bg-white border-[3px] border-neutral-300 group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-all duration-500 shadow-sm" />
                    </div>
                    <div className="flex-1 p-8 md:p-10 rounded-3xl bg-white border border-neutral-200 hover:border-neutral-300 hover:-translate-y-1 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-neutral-100 group-hover:bg-neutral-800 transition-colors duration-500" />
                      
                      <span className="text-xs text-neutral-400 mb-4 block font-mono tracking-widest uppercase">{item.year}</span>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 text-neutral-900 tracking-wide font-display">{item.role}</h3>
                      <h4 className="text-sm md:text-md text-neutral-500 mb-6 font-medium tracking-wider">{item.company}</h4>
                      
                      <div className="flex flex-col gap-4">
                        {item.desc.map((d, idx) => (
                          <div key={idx} className="flex flex-col gap-1.5">
                             <div className="text-neutral-900 font-bold text-[14px] md:text-[15px] flex items-center gap-2">
                               <div className="w-1 h-1 rounded-full bg-neutral-300 group-hover:bg-neutral-700 transition-colors" />
                               {d.title}
                             </div>
                             <p className="text-neutral-600 leading-relaxed text-[13px] md:text-sm pl-3 border-l-[1.5px] border-transparent group-hover:border-neutral-200 transition-colors duration-300">
                               {d.content}
                             </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            </section>

            {/* GIF WALL SECTION */}
            <GifWall setFullscreenGif={setFullscreenGif} />

            {/* WORKS CAROUSEL SECTION */}
            <WorksCarousel onOpenWork={setSelectedWorkId} />

            {/* OTHER WORKS SECTION */}
            <section id="works" className="relative w-full min-h-screen py-24 md:py-32 flex flex-col justify-start text-neutral-900 snap-start shrink-0 -mt-[300px] md:mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 w-full flex-shrink-0 xl:-translate-x-[400px] translate-y-[300px] transition-transform relative"
              >
                <p className="font-mono text-[11px] md:text-[13px] tracking-[0.4em] text-neutral-400 mb-6 uppercase">— 04 Projects —</p>
                <h2 className="text-[40px] sm:text-[50px] md:text-[72px] lg:text-[84px] leading-[1.05] font-black tracking-tight font-display text-neutral-900">其他作品</h2>
              </motion.div>
              
              <div className="max-w-7xl mx-auto px-6 w-full flex-1 mt-[350px]">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {OTHER_WORKS_DATA.map((item, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: i * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                        key={item.id} 
                        id={`other-work-${item.id}`}
                        onClick={() => item.status === 'done' && setSelectedAudioId(item.id)}
                        className={`flex flex-col bg-white rounded-3xl p-6 md:p-8 border transition-all duration-500 group ${item.status === 'done' ? 'border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-xl hover:-translate-y-2 cursor-pointer' : 'border-neutral-100 opacity-60 grayscale cursor-not-allowed'}`}
                      >
                         {/* Audio Cover / Visualizer Area */}
                         <div className="w-full aspect-video bg-neutral-100/50 border border-neutral-100 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-neutral-50 mb-8 transition-colors">
                            {item.preview ? (
                               <img src={item.preview} alt={item.title} className="w-full h-full object-cover absolute inset-0" />
                            ) : (
                               <div className="text-neutral-300 tracking-[0.3em] uppercase text-xs font-mono font-medium relative z-10">
                                  {item.mediaType === 'video' ? `Video ${item.id}` : `Track ${item.id}`}
                               </div>
                            )}
                            
                            {/* Overlay for audio controls */}
                            <div 
                              onClick={(e) => e.stopPropagation()} 
                              className="absolute inset-x-0 bottom-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-white via-white/80 to-transparent flex items-end justify-center"
                            >
                               {item.status === 'done' ? (
                                  item.mediaType === 'video' ? (
                                    <div className="text-neutral-500 font-mono tracking-widest text-xs">CLICK TO PLAY</div>
                                  ) : (
                                    <audio controls className="w-full h-12 grayscale opacity-90 custom-audio-player" src={item.source || `/audio-placeholder-${item.id}.mp3`}></audio>
                                  )
                               ) : (
                                  <div className="text-neutral-400 text-sm tracking-widest font-mono">WIP</div>
                               )}
                            </div>
                         </div>
                         
                         {/* Description Area */}
                         <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                               <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">{item.title}</h3>
                            </div>
                            <p className="text-neutral-500 text-[14px] md:text-[15px] leading-relaxed">
                              {item.desc}
                            </p>
                         </div>
                      </motion.div>
                    ))}
                 </div>
              </div>

            </section>

            {/* FOOTER */}
            <footer className="w-full text-center text-[10px] text-neutral-400 font-mono tracking-[0.3em] uppercase pb-12 pt-12 border-t border-neutral-100 mix-blend-multiply opacity-80">
               © 2026 KUN WANG. ALL RIGHTS RESERVED.
            </footer>

          </motion.div>
        ) : currentView === 'project' ? (
          <motion.div key="project" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.5 } }} className="min-h-screen">
            {/* HORIZONTAL PROJECT DETAIL */}
            <ProjectDetail onBack={() => setCurrentView('home')} />
          </motion.div>
        ) : currentView === 'gifs' ? (
          <motion.div key="gifs" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.5 } }} className="min-h-screen">
            <GifGallery onBack={() => setCurrentView('home')} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
    </>
  );
}

// === GIF WALL COMPONENT ===
const GifWall = ({ setFullscreenGif }: { setFullscreenGif: (id: number | null) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollXRaw = useMotionValue(0);
  // Softer spring for GifWall snapping
  const scrollXSpring = useSpring(scrollXRaw, { damping: 50, stiffness: 120, mass: 1.2 });
  const trackX = useTransform(scrollXSpring, v => -v);
  const snapTimeout = useRef<any>(null);

  const updateVisuals = () => {
     const container = containerRef.current;
     if (!container) return;
     const items = container.querySelectorAll('.gif-wall-item');
     const screenWidth = window.innerWidth;
     const screenCenter = screenWidth / 2;
     const isTV = screenWidth >= 1280;
     const isDesktop = screenWidth >= 1024;
      
     items.forEach((item: Element) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const dist = Math.abs(itemCenter - screenCenter);
        
        // Refined responsive distance falloff - larger screens need larger scaling threshold
        const maxDist = isTV ? 700 : (isDesktop ? 450 : 250);
        const normalized = Math.min(dist / maxDist, 1);
        const smoothRatio = normalized * normalized * (3 - 2 * normalized);
        
        // Scaling reduced from extremely massive (2.1) to balanced large (1.6)
        const baseMaxScale = isTV ? 1.6 : (isDesktop ? 1.3 : 1.15);
        const scaleDrop = isTV ? 0.9 : (isDesktop ? 0.6 : 0.5);
        const scale = baseMaxScale - (smoothRatio * scaleDrop); 
        
        const grayscale = smoothRatio * 100;
        const opacity = 1 - (smoothRatio * (isTV ? 0.6 : 0.4));

        const htmlItem = item as HTMLElement;
        htmlItem.style.transform = `scale(${scale})`; // Only scales visually, flex layout box remains static to keep distance
        htmlItem.style.filter = `grayscale(${grayscale}%)`;
        htmlItem.style.opacity = `${opacity}`;
      });
  };

  const getTargetScrollForIndex = (index: number) => {
     const container = containerRef.current;
     if (!container) return 0;
     const items = container.querySelectorAll('.gif-wall-item');
     if (items[0] && items[index]) {
         return (items[index] as HTMLElement).offsetLeft - (items[0] as HTMLElement).offsetLeft;
     }
     return 0;
  };

  const snapToNearest = (predictedScroll: number) => {
     const container = containerRef.current;
     if(!container) return;
     const items = container.querySelectorAll('.gif-wall-item');
     if (!items.length) return;
     
     const item0Offset = (items[0] as HTMLElement).offsetLeft;
     
     let closestScroll = scrollXRaw.get();
     let minDiff = Infinity;
     
     items.forEach((item) => {
         const requiredScroll = (item as HTMLElement).offsetLeft - item0Offset;
         const diff = Math.abs(predictedScroll - requiredScroll);
         if(diff < minDiff) {
             minDiff = diff;
             closestScroll = requiredScroll;
         }
     });
     
     const maxScroll = (items[items.length - 1] as HTMLElement).offsetLeft - item0Offset;
     closestScroll = Math.max(0, Math.min(maxScroll, closestScroll));
     scrollXRaw.set(closestScroll);
  };

  useEffect(() => {
    // Initial centering to the third item (index 2) as requested
    const focusThirdItem = () => {
        const targetScroll = getTargetScrollForIndex(2);
        if (targetScroll > 0) {
            scrollXRaw.set(targetScroll);
            updateVisuals();
        }
    };
    
    // We defer slightly so the layout engine processes the width and margins first.
    setTimeout(focusThirdItem, 50);
    setTimeout(focusThirdItem, 200);
    setTimeout(focusThirdItem, 500); // Failsafe for slower image loads shifting layout

    window.addEventListener('resize', focusThirdItem);
    return () => window.removeEventListener('resize', focusThirdItem);
  }, []);

  useEffect(() => {
     const unsub = scrollXSpring.on("change", () => {
         updateVisuals();
     });
     const layoutTick = setTimeout(updateVisuals, 20);
     return () => {
         unsub();
         clearTimeout(layoutTick);
     };
  }, [scrollXSpring]);

  return (
    <section id="effects" className="relative w-full min-h-screen py-24 md:py-32 flex flex-col justify-start snap-start shrink-0">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 w-full xl:-translate-x-[400px] transition-transform relative"
      >
        <p className="font-mono text-[11px] md:text-[13px] tracking-[0.4em] text-neutral-400 mb-6 uppercase">— 02 Effects —</p>
        <h2 className="text-[40px] sm:text-[50px] md:text-[72px] lg:text-[84px] leading-[1.05] font-black tracking-tight font-display text-neutral-900">效果练习</h2>
      </motion.div>
      
      {/* Outer interactive pan area */}
      <motion.div 
        id="effects-focus"
        onPan={(_, info) => {
           clearTimeout(snapTimeout.current);
           scrollXRaw.set(scrollXRaw.get() - info.delta.x);
        }}
        onPanEnd={(_, info) => {
           const predicted = scrollXRaw.get() - info.velocity.x * 0.2;
           snapToNearest(predicted);
        }}
        className="relative w-full overflow-visible touch-none cursor-grab active:cursor-grabbing flex h-[50vh] md:h-[60vh] md:mt-auto md:mb-auto items-center -translate-y-[100px] md:translate-y-0"
      >
        <motion.div 
          ref={containerRef}
          style={{ 
             x: trackX,
             paddingRight: '50vw' 
          }}
          className="flex gap-2 sm:gap-4 md:gap-16 lg:gap-24 xl:gap-[160px] 2xl:gap-[200px] items-center w-max pl-[calc(50vw-120px)] sm:pl-[calc(50vw-140px)] md:pl-[calc(50vw-240px)]"
        >
          {EFFECTS.map((effect) => {
             const handleItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
                 const rect = e.currentTarget.getBoundingClientRect();
                 const itemCenter = rect.left + rect.width / 2;
                 const screenCenter = window.innerWidth / 2;
                 
                 // If item is already near the center focus point, toggle full screen
                 if (Math.abs(itemCenter - screenCenter) < 40) {
                     setFullscreenGif(effect.id);
                 } else {
                     // Otherwise, slide carousel to focus this item
                     const requiredScroll = scrollXRaw.get() + (itemCenter - screenCenter);
                     scrollXRaw.set(requiredScroll);
                 }
             };

             return (
               <div 
                 key={effect.id} 
                 onClick={handleItemClick}
                 className="gif-wall-item shrink-0 w-[240px] sm:w-[280px] md:w-[480px] aspect-video rounded-xl overflow-hidden pointer-events-auto cursor-pointer transition-transform duration-[50ms] shadow-lg select-none relative"
                 style={{ transformOrigin: 'center center' }}
               >
                  <div className="absolute top-4 right-4 z-10 bg-white/80 text-neutral-900 text-[10px] uppercase font-mono px-3 py-1 rounded-full backdrop-blur-md border border-neutral-200 pointer-events-none shadow-sm">GIF</div>
                  <video 
                    src={`/${effect.video}.mp4`} 
                    className="w-full h-full object-cover pointer-events-none select-none bg-neutral-100" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
                     <p className="text-white text-sm md:text-base font-medium tracking-wide drop-shadow-md">{effect.title}</p>
                  </div>
               </div>
             );
          })}
        </motion.div>
      </motion.div>
      


    </section>
  );
};

// === WORKS CAROUSEL COMPONENT ===
const WorksCarousel = ({ onOpenWork }: { onOpenWork: (id: number) => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotateRaw = useMotionValue(0);
  // Faster, more responsive spring for snappier click-to-focus
  const rotate = useSpring(rotateRaw, { damping: 45, stiffness: 120, mass: 0.8 }); 
  const ITEM_ANGLE = 360 / WORKS.length; // Snap angle based on item count

  const [isMobile, setIsMobile] = useState(false);
  const [isTV, setIsTV] = useState(false);
  useEffect(() => {
    const handleResize = () => {
       setIsMobile(window.innerWidth < 1024);
       setIsTV(window.innerWidth >= 1280);
    };
    handleResize(); // Init safely
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const snapToNearest = (velocity = 0) => {
     const current = rotateRaw.get();
     // Add momentum from physical drag/swipe
     const projected = current + velocity * 0.15;
     const remainder = projected % ITEM_ANGLE;
     let target = projected - remainder;
     if (Math.abs(remainder) > ITEM_ANGLE / 2) {
         target += Math.sign(remainder) * ITEM_ANGLE;
     }
     rotateRaw.set(target);
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let wheelTimeout: any;
    
    // Custom wheel handler to natively override mouse scroll strictly on this container
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Prevents the browser page from scrolling 
      rotateRaw.set(rotateRaw.get() - e.deltaY * 0.15); // Adjust rotation speed multiplier here
      
      clearTimeout(wheelTimeout);
      wheelTimeout = setTimeout(() => {
         snapToNearest();
      }, 150);
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
       el.removeEventListener('wheel', handleWheel);
       clearTimeout(wheelTimeout);
    };
  }, [rotateRaw]);

  return (
    <section id="pv" className="relative w-full h-[120vh] lg:h-screen py-24 md:py-32 flex flex-col justify-start overflow-visible snap-start shrink-0 -mt-[300px] md:mt-0">
      
      {/* === TEXT: "PV练习" === */}
      <div className="absolute lg:relative top-[5vh] lg:top-auto max-w-7xl mx-auto px-6 mb-12 md:mb-16 w-full flex-shrink-0 z-20 pointer-events-none xl:-translate-x-[400px] transition-transform">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-auto text-left translate-y-[100px] relative"
        >
          <p className="font-mono text-[11px] md:text-[13px] tracking-[0.4em] text-neutral-400 mb-6 uppercase">— 03 PV —</p>
          <h2 className="text-[40px] sm:text-[50px] md:text-[72px] lg:text-[84px] leading-[1.05] font-black tracking-tight text-neutral-900 font-display">PV练习</h2>
        </motion.div>
      </div>

      {/* === SCROLL CAPTURE & VISUALS === */}
      {/* Restrict the wheel/touch interaction area to the right so the left side remains easily scrollable on desktop. */}
      <motion.div 
        id="pv-focus"
        ref={containerRef}
        className="absolute top-[28vh] lg:top-auto lg:bottom-1/2 lg:translate-y-1/2 right-0 z-10 w-full lg:w-[50vw] h-[55vh] lg:h-[70vh] touch-none"
        onPan={(_, info) => {
           // Allow infinite rotation through finger swipes
           rotateRaw.set(rotateRaw.get() + info.delta.y * 0.4);
        }}
        onPanEnd={(_, info) => {
           // Apply inertia and snap precisely to the focused item
           snapToNearest(info.velocity.y * 0.3);
        }}
      >
        <div className="w-full lg:w-[100vw] h-full lg:absolute lg:right-0 relative pointer-events-none overflow-visible max-lg:translate-y-[10vh]">
          {/* Explicitly Center the Focal Point */}
          {/* Desktop relies on shifting to frame the left side, Mobile centers the horizontal ring vertically */}
          <div 
            className="absolute top-[50%] left-1/2 will-change-transform flex items-center justify-center transition-transform duration-700"
            style={{ transform: isMobile ? 'translate(-50%, calc(-50% - 22vh + 150px))' : 'translate(calc(-50% + 55%), calc(-50% + 200px))' }}
          >
            <motion.div className="relative w-full h-[50vh] lg:w-[900px] lg:h-[900px] xl:w-[1200px] xl:h-[1200px] 2xl:w-[1400px] 2xl:h-[1400px] flex items-center justify-center">
              {WORKS.map((work, i) => {
              const angle = (i / WORKS.length) * 360;
              
              const handleItemClick = (id: number, itemAngle: number) => {
                 const currentRotate = rotateRaw.get();
                 let global = (currentRotate + itemAngle) % 360;
                 if (global < -180) global += 360;
                 if (global > 180) global -= 360;

                 // If it is almost at center (e.g. less than 15 degrees off), act as a generic open click
                 if (Math.abs(global) < 15) {
                    onOpenWork(id);
                 } else {
                    // Otherwise, rotate the carousel to focus this item
                    rotateRaw.set(currentRotate - global);
                 }
              };
              
              return <CarouselItem key={work.id} work={work} angle={angle} parentRotate={rotate} onOpen={() => handleItemClick(work.id, angle)} isMobile={isMobile} isTV={isTV} />;
            })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const CarouselItem = ({ work, angle, parentRotate, onOpen, isMobile, isTV }: any) => {
  // Calculate raw global angle (-180 to 180, relative to focal spot)
  const signedDistance = useTransform(parentRotate, (v) => {
      let global = (v + angle) % 360;
      if (global < -180) global += 360;
      if (global > 180) global -= 360;
      return global;
  });

  const distanceToRight = useTransform(signedDistance, (v) => Math.abs(v));

  // Separate scales for responsive focus
  const tvScale = useTransform(distanceToRight, [0, 45, 120, 180], [1.6, 0.9, 0.6, 0.5]);
  const desktopScale = useTransform(distanceToRight, [0, 45, 120, 180], [1.2, 0.9, 0.7, 0.6]);
  const mobileScale = useTransform(distanceToRight, [0, 60, 120, 180], [1.38, 0.85, 0.6, 0.5]);
  const scale = isMobile ? mobileScale : (isTV ? tvScale : desktopScale);
  
  const opacity = useTransform(distanceToRight, [0, 45, 120, 180], [1, 0.6, 0.3, 0.15]);
  
  // Dynamic Y-axis 3D rotation for non-focal items (curve changes based on mobile/desktop placement)
  const mobileRotateY = useTransform(signedDistance, [-180, -90, 0, 90, 180], [0, 55, 0, -55, 0]);
  const desktopRotateY = useTransform(signedDistance, [-180, -90, 0, 90, 180], [0, -55, 0, 55, 0]);
  const rotateY = isMobile ? mobileRotateY : desktopRotateY;
  // Add slight X-axis tilt for organic 3D space
  const rotateX = useTransform(distanceToRight, [0, 180], [0, 20]);

  // Create dynamic filter using template for grayscale
  // Focused items are fully colored (val 0), and others softly fade to black & white (val 100)
  const grayscaleRaw = useTransform(distanceToRight, [0, 45, 120, 180], [0, 30, 80, 100]);
  
  const filter = useMotionTemplate`grayscale(${grayscaleRaw}%)`;
  
  const zIndexDesktop = useTransform(distanceToRight, [0, 180], [20, 0]);
  const zIndexMobile = useTransform(distanceToRight, [0, 180], [20, 0]);
  const zIndex = isMobile ? zIndexMobile : zIndexDesktop;

  // Desktop mappings (Left-sided Ferris wheel) - Y-axis radius reduced for an elliptical, more compact vertical spread, X-axis enlarged
  const desktopLeft = useTransform(signedDistance, (a) => `calc(50% - ${Math.cos(a * Math.PI / 180) * 55}%)`);
  const desktopTop = useTransform(signedDistance, (a) => `calc(50% - ${Math.sin(a * Math.PI / 180) * 22}%)`);

  // Mobile mappings (Horizontal 3D Ring using dynamic angle)
  // Front center is 0vh offset (highest Z-index), back forms an arc bending downwards 
  // making a horseshoe/U-shape where the focal item is the physical top.
  const mobileX = useTransform(signedDistance, (a) => `calc(-50% + ${Math.sin(a * Math.PI / 180) * 46}vw)`);
  const mobileY = useTransform(signedDistance, (a) => `calc(-50% + ${(1 - Math.cos(a * Math.PI / 180)) * 16}vh)`);

  const leftPos = isMobile ? "50%" : desktopLeft;
  const topPos = isMobile ? "50%" : desktopTop;
  const xPos = isMobile ? mobileX : "-50%";
  const yPos = isMobile ? mobileY : "-50%";

  return (
    <motion.div 
      className="absolute flex flex-col items-center justify-center cursor-pointer pointer-events-auto origin-center group" 
      style={{ left: leftPos, top: topPos, x: xPos, y: yPos, scale, opacity, zIndex, filter, perspective: 1200 }}
      onClick={onOpen}
    >
      <motion.div 
        style={{ rotateY, rotateX }} 
        whileHover={!isMobile ? { y: -15, scale: 1.05 } : {}}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="flex flex-col items-center relative"
      >
        {/* 16:9 Image/Video Container */}
        <motion.div className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[400px] xl:w-[480px] aspect-video rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-black transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)] relative border border-transparent lg:group-hover:border-white/20">
          <img src={work.preview || `/${work.title}.jpg`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={work.title} />
          <div className="absolute inset-0 bg-white/0 lg:group-hover:bg-white/5 transition-colors duration-500"></div>
        </motion.div>
        {/* Upright Text Container */}
        <div className="mt-3 md:mt-6 flex flex-col items-center drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
           <h3 className="text-xl md:text-3xl font-bold whitespace-nowrap text-neutral-900 tracking-tight">{work.title}</h3>
           <span className="text-[10px] md:text-sm text-neutral-500 mt-1 md:mt-2 tracking-widest uppercase font-medium">{work.category}</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

// === PROJECT DETAIL VIEW ===
const ProjectDetail = ({ onBack }: { onBack: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });
  const x = useTransform(smoothProgress, [0, 1], ["0%", "calc(-100% + 100vw)"]);

  return (
    <div ref={containerRef} className="relative lg:h-[400vh] text-neutral-900">
      <div className="lg:sticky lg:top-0 h-screen lg:overflow-hidden flex items-center overflow-x-auto snap-x snap-mandatory hide-scrollbar">
        <button onClick={onBack} className="fixed top-8 left-8 md:top-12 md:left-12 z-50 text-neutral-500 hover:text-neutral-900 flex items-center gap-3 px-6 py-3 rounded-full hover:bg-neutral-100 transition-colors backdrop-blur-md border border-neutral-200">
          <X size={20} /> <span className="text-sm tracking-widest uppercase mt-[2px]">返回</span>
        </button>

        {/* Desktop Container */}
        <motion.div style={{ x }} className="hidden lg:flex h-screen items-center px-[8vw] gap-[8vw] w-max">
          <GalleryContent />
        </motion.div>

        {/* Mobile Container (Native Scroll) */}
        <div className="flex lg:hidden h-screen items-center px-[8vw] gap-[8vw] w-max">
          <GalleryContent />
        </div>
      </div>
    </div>
  );
};

// Helper component to avoid duplicating the gallery markup
const GalleryContent = () => (
  <>
    {/* Intro */}
    <div className="w-[80vw] shrink-0 flex flex-col justify-center snap-center">
      <h1 className="text-6xl md:text-9xl font-bold mb-8 tracking-tighter font-display">春岚</h1>
      <h3 className="text-xl md:text-2xl text-neutral-400 mb-12 uppercase tracking-[0.3em] font-mono font-medium">音乐PV</h3>
      <p className="text-lg md:text-xl leading-relaxed text-neutral-600 max-w-2xl font-light">
         在这个项目中，我试图探索光影与未来主义的交汇点。利用最新的三维渲染技术，结合复古的色调调整，呈现出一个既陌生又熟悉的世界。每一帧画面都经过精心雕琢，以确保视觉上的极致张力。
      </p>
      <p className="mt-12 text-xs md:text-sm text-neutral-400 tracking-[0.3em] uppercase flex items-center gap-4">
        向右滑动浏览全部 <ArrowRight size={16} />
      </p>
    </div>
    {/* Gallery Items */}
    {[1, 2, 3, 4, 5].map((index) => (
      <div key={index} className="w-[70vw] md:w-[35vw] shrink-0 flex flex-col justify-center h-screen px-4 snap-center">
         <div className={`flex flex-col ${index % 2 === 0 ? 'mt-32' : 'mb-32'}`}>
            <div className="w-full aspect-[3/4] overflow-hidden rounded-2xl group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-neutral-100 border border-neutral-200">
               {index === 1 ? (
                 <img src={WORKS[0].preview || `/${WORKS[0].title}.png`} className="w-full h-full object-cover filter grayscale group-active:scale-95 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105" alt="春岚" />
               ) : (
                 <img src={WORKS[index-1]?.preview || `https://picsum.photos/seed/gallery_work_${index}/800/1000`} className="w-full h-full object-cover filter grayscale group-active:scale-95 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105" alt={`Detailed Work ${index}`} />
               )}
            </div>
            <p className={`text-xs text-neutral-400 tracking-widest uppercase mt-6 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>Exhibit 0{index} // Detail View</p>
         </div>
      </div>
    ))}
    {/* Spacer */}
    <div className="w-[10vw] shrink-0 snap-end" />
  </>
);

// === GIF GALLERY COMPONENT ===
const GifGallery = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="relative min-h-screen text-neutral-900 pt-32 p-6 md:p-12">
       <button onClick={onBack} className="fixed top-8 left-8 md:top-12 md:left-12 z-50 text-neutral-500 hover:text-neutral-900 flex items-center gap-3 px-6 py-3 rounded-full hover:bg-neutral-100 transition-colors backdrop-blur-md border border-neutral-200">
          <X size={20} /> <span className="text-sm tracking-widest uppercase mt-[2px]">返回</span>
       </button>
       
       <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">效果练习</h2>
          <p className="text-neutral-500 mb-16 font-light uppercase tracking-widest text-sm">Visual Effects Practice & Motion Design</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {EFFECTS.map((effect) => (
               <div key={effect.id} className="group relative aspect-square bg-neutral-100 rounded-2xl overflow-hidden shadow-md border border-neutral-200">
                 <div className="absolute top-4 right-4 z-10 bg-white/80 text-neutral-900 text-[10px] uppercase font-mono px-3 py-1 rounded-full backdrop-blur-md border border-neutral-200 shadow-sm">GIF</div>
                 <video 
                   src={`/${effect.video}.mp4`} 
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105" 
                   autoPlay 
                   loop 
                   muted 
                   playsInline 
                 />
                 
                 <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <p className="text-xl font-medium tracking-wide text-white">{effect.title}</p>
                    <p className="text-xs text-neutral-300 mt-2">短视频 / 视觉循环练习</p>
                 </div>
               </div>
             ))}
          </div>
       </div>
    </div>
  );
};
