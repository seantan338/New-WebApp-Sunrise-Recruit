import React, { useState } from 'react';
import { Search, Globe, Users, Briefcase, ChevronRight, Menu, X, ShieldCheck, MapPin } from 'lucide-react';

// 中英双语内容词典
const content = {
  zh: {
    nav: { home: "首页", about: "关于我们", services: "企业服务", candidates: "求职者", contact: "联系顾问" },
    hero: { tag: "MY | SG CROSS-BORDER SPECIALIST", title1: "智能招聘，连接", title2: "顶尖新马人才", desc: "Sunrise Recruit 提供专业、合规的马来西亚与新加坡跨境人力资源解决方案。结合 4U 智能平台，让企业招聘更高效，让求职者脱颖而出。", btn1: "寻找理想工作", btn2: "发布招聘需求" },
    trust: { jtkTitle: "马来西亚人力资源部认证", eaTitle: "新加坡跨国招聘准证", expTitle: "超过 15 年行业经验", expDesc: "1000+ 成功入职案例" },
    services: { title: "我们的专业领域", desc: "我们提供定制化的人力资源解决方案，涵盖各个行业阶层，全面满足您的企业发展需求。", s1Title: "高管寻猎 (Executive Search)", s1Desc: "针对高级管理层和专业技术人才的定向寻猎服务。深度了解您的企业文化，精准匹配能带领团队走向未来的核心领袖。", s2Title: "新马跨境招聘 (Cross-Border)", s2Desc: "专注于将马来西亚优秀人才输送至新加坡市场。我们负责处理繁琐的跨境手续、工作准证申请及合规咨询，实现无缝衔接。", s3Title: "蓝领与批量招聘 (Mass Hiring)", s3Desc: "为零售、物流、制造等行业提供高效的批量招聘解决方案。结构化的筛选流程确保在短时间内为您建立可靠的基础团队。", learnMore: "了解更多" },
    platform: { title: "探索 4U 智能平台", desc: "告别传统的低效投递。4U 是我们自主研发的数字化招聘基建，旨在简化招聘流程，提高匹配精准度，并实现招聘旅程的全程透明化沟通。", btn: "即刻体验 4U" },
    footer: { desc: "马来西亚及新加坡专业人力资源服务机构。合规经营，以关系驱动，为您提供智慧招聘解决方案。", linksTitle: "快捷链接", link1: "企业服务", link2: "求职者专区", link3: "4U 合作伙伴", link4: "隐私政策", contactTitle: "联系我们", rights: "© 2026 Sunrise Recruit. All rights reserved." },
    langBtn: "EN"
  },
  en: {
    nav: { home: "Home", about: "About Us", services: "Services", candidates: "Candidates", contact: "Contact Us" },
    hero: { tag: "MY | SG CROSS-BORDER SPECIALIST", title1: "Smart Recruitment,", title2: "Connecting Top MY-SG Talent", desc: "Sunrise Recruit provides professional, compliant cross-border HR solutions between Malaysia and Singapore. Powered by the 4U smart platform, we make corporate hiring efficient and help candidates stand out.", btn1: "Find a Job", btn2: "Post a Job" },
    trust: { jtkTitle: "Certified by Ministry of HR Malaysia", eaTitle: "Singapore Cross-Border License", expTitle: "15+ Years Industry Experience", expDesc: "1000+ Successful Placements" },
    services: { title: "Our Expertise", desc: "We provide customized HR solutions across various industries to fully meet your business development needs.", s1Title: "Executive Search", s1Desc: "Targeted search services for senior management and specialized technical talents. We deeply understand your corporate culture to precisely match core leaders.", s2Title: "Cross-Border Recruitment", s2Desc: "Focused on supplying excellent Malaysian talent to the Singapore market. We handle border procedures, work permit applications, and compliance seamlessly.", s3Title: "Mass Hiring", s3Desc: "Efficient mass hiring solutions for retail, logistics, and manufacturing. Our structured screening ensures a reliable foundation team in a short time.", learnMore: "Learn More" },
    platform: { title: "Discover the 4U Platform", desc: "Say goodbye to inefficient traditional applications. 4U is our proprietary digital recruitment infrastructure designed to simplify the hiring process, improve matching accuracy, and achieve transparent communication.", btn: "Experience 4U Now" },
    footer: { desc: "Professional HR service agency in Malaysia and Singapore. Compliant, relationship-driven, providing smart recruitment solutions.", linksTitle: "Quick Links", link1: "Our Services", link2: "Candidate Zone", link3: "4U Partners", link4: "Privacy Policy", contactTitle: "Contact Us", rights: "© 2026 Sunrise Recruit. All rights reserved." },
    langBtn: "中文"
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState('zh'); // 默认语言为中文

  const t = content[lang]; // 当前使用的语言包

  // 切换语言的处理函数
  const toggleLanguage = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 transition-all duration-300">
      {/* 顶部导航栏 */}
      <nav className="bg-blue-950 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center font-bold text-xl tracking-tighter">
                SR
              </div>
              <div>
                <span className="font-bold text-2xl tracking-tight">Sunrise Recruit</span>
                <p className="text-xs text-blue-200 tracking-wider">Powered by 4U Platform</p>
              </div>
            </div>

            {/* 桌面端菜单 */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#" className="hover:text-orange-400 transition-colors">{t.nav.home}</a>
              <a href="#" className="hover:text-orange-400 transition-colors">{t.nav.about}</a>
              <a href="#" className="hover:text-orange-400 transition-colors">{t.nav.services}</a>
              <a href="#" className="hover:text-orange-400 transition-colors">{t.nav.candidates}</a>

              {/* 语言切换按钮 (右上角) */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-blue-200 hover:text-white transition-colors bg-blue-900/50 px-3 py-1.5 rounded-full border border-blue-800"
              >
                <Globe size={16} />
                <span className="font-medium text-sm">{t.langBtn}</span>
              </button>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-medium transition-all shadow-sm">
                {t.nav.contact}
              </button>
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden flex items-center space-x-4">
              {/* 移动端语言切换 */}
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-blue-200 hover:text-white"
              >
                <Globe size={20} />
                <span className="font-medium text-sm">{t.langBtn}</span>
              </button>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* 移动端下拉菜单 */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-900 px-4 pt-2 pb-4 space-y-2 border-t border-blue-800">
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-800">{t.nav.home}</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-800">{t.nav.services}</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-orange-500 text-orange-400 font-bold">{t.nav.contact}</a>
          </div>
        )}
      </nav>

      {/* 英雄首屏 */}
      <div className="relative bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="md:w-2/3">
            <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-sm font-semibold mb-6 tracking-wide uppercase">
              {t.hero.tag}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {t.hero.title1}<br />
              <span className="text-orange-500">{t.hero.title2}</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl leading-relaxed">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg flex items-center justify-center">
                {t.hero.btn1} <Search className="ml-2" size={20} />
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center">
                {t.hero.btn2} <Briefcase className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 信任背书与执照 */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="flex flex-col items-center justify-center p-4">
              <ShieldCheck className="text-blue-900 mb-2" size={32} />
              <p className="text-sm text-slate-500 font-medium">{t.trust.jtkTitle}</p>
              <p className="font-bold text-slate-800">License No: JTKSM 170B</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <Globe className="text-orange-500 mb-2" size={32} />
              <p className="text-sm text-slate-500 font-medium">{t.trust.eaTitle}</p>
              <p className="font-bold text-slate-800">EA License: 25C3029</p>
            </div>
            <div className="flex flex-col items-center justify-center p-4">
              <Users className="text-blue-900 mb-2" size={32} />
              <p className="text-sm text-slate-500 font-medium">{t.trust.expTitle}</p>
              <p className="font-bold text-slate-800">{t.trust.expDesc}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 核心服务 */}
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">{t.services.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{t.services.desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                <Briefcase className="text-blue-900 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t.services.s1Title}</h3>
              <p className="text-slate-600 mb-6 line-clamp-3">{t.services.s1Desc}</p>
              <a href="#" className="text-orange-500 font-semibold flex items-center hover:text-orange-600">
                {t.services.learnMore} <ChevronRight size={16} className="ml-1" />
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                <Globe className="text-orange-500 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t.services.s2Title}</h3>
              <p className="text-slate-600 mb-6 line-clamp-3">{t.services.s2Desc}</p>
              <a href="#" className="text-orange-500 font-semibold flex items-center hover:text-orange-600">
                {t.services.learnMore} <ChevronRight size={16} className="ml-1" />
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-shadow group">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                <Users className="text-blue-900 group-hover:text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{t.services.s3Title}</h3>
              <p className="text-slate-600 mb-6 line-clamp-3">{t.services.s3Desc}</p>
              <a href="#" className="text-orange-500 font-semibold flex items-center hover:text-orange-600">
                {t.services.learnMore} <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 4U 平台引流 */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">{t.platform.title}</h2>
              <p className="text-blue-200 mb-6 max-w-lg leading-relaxed">{t.platform.desc}</p>
              <button className="bg-white text-blue-950 hover:bg-slate-100 px-6 py-3 rounded-md font-bold transition-colors">
                {t.platform.btn}
              </button>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 bg-gradient-to-tr from-orange-500 to-orange-300 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-5xl font-black text-white tracking-tighter">4U.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <span className="font-bold text-2xl text-white tracking-tight block mb-4">Sunrise Recruit</span>
              <p className="mb-4 max-w-sm leading-relaxed">{t.footer.desc}</p>
              <div className="flex items-start space-x-2 mb-2">
                <MapPin size={18} className="text-orange-500 shrink-0 mt-1" />
                <p>7B, Jalan Eko Botani 3/5, Taman Eko Botani<br />79100 Iskandar Puteri, Johor, Malaysia</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">{t.footer.linksTitle}</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-orange-400 transition-colors">{t.footer.link1}</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">{t.footer.link2}</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">{t.footer.link3}</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">{t.footer.link4}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">{t.footer.contactTitle}</h4>
              <ul className="space-y-2">
                <li>MY: +6016 745 7735</li>
                <li>SG: +65 8930 3903</li>
                <li>Email: sales@sunriserecruit.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
            <p>{t.footer.rights}</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <span>MY | SG</span>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Compliance</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}