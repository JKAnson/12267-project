const langData = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navContact: "Contact",
    navGenres: "Genres",
    navLatest: "Latest",
    genreRomance: "Romance",
    genreAction: "Action",
    genreComedy: "Comedy",
    searchInput: "Search anime...",
    menuWatchHistory: "Watch History",
    menuMyFavorites: "My Favorites",
    menuRecommended: "Recommended for Me",
    menuSettings: "Settings",
    menuLogoutText: "Logout",
    // About page
    aboutHeroTitle: "About AnimeWatch",
    aboutHeroText: "Your premier destination for discovering and streaming the best anime series.",
    missionTitle: "Our Mission",
    missionText: "This version is for learning and academic purposes only. Unauthorized distribution is prohibited.",
    // Contact page
    contactTitle: "Contact Us",
    labelName: "Name",
    labelEmail: "Email",
    labelMessage: "Message",
    sendBtn: "Send Message"
  },
  th: {
    navHome: "หน้าแรก",
    navAbout: "เกี่ยวกับเรา",
    navContact: "ติดต่อ",
    navGenres: "หมวดหมู่",
    navLatest: "ล่าสุด",
    genreRomance: "โรแมนติก",
    genreAction: "แอคชั่น",
    genreComedy: "คอมเมดี้",
    searchInput: "ค้นหาอนิเมะ...",
    menuWatchHistory: "ประวัติการรับชม",
    menuMyFavorites: "รายการโปรดของฉัน",
    menuRecommended: "แนะนำสำหรับฉัน",
    menuSettings: "ตั้งค่า",
    menuLogoutText: "ออกจากระบบ",
    // About page
    aboutHeroTitle: "เกี่ยวกับ AnimeWatch",
    aboutHeroText: "ปลายทางชั้นนำของคุณสำหรับการค้นพบและสตรีมซีรีส์อะนิเมะที่ดีที่สุด",
    missionTitle: "ภารกิจของเรา",
    missionText: "เวอร์ชันนี้ใช้เพื่อการเรียนรู้และงานวิชาการเท่านั้น ห้ามเผยแพร่ต่อโดยไม่ได้รับอนุญาต",
    // Contact page
    contactTitle: "ติดต่อเรา",
    labelName: "ชื่อ",
    labelEmail: "อีเมล",
    labelMessage: "ข้อความ",
    sendBtn: "ส่งข้อความ"
  }
};

function changeLang(lang) {
  const textMap = langData[lang] || langData.en;
  for (const key in textMap) {
    const el = document.getElementById(key);
    if (el) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = textMap[key];
      } else {
        el.textContent = textMap[key];
      }
    }
  }
  localStorage.setItem('lang', lang);
}

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang')
    || (navigator.language.startsWith('th') ? 'th' : 'en');
  changeLang(saved);
});