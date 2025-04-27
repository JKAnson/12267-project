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
        aboutHeroTitle: "About AnimeWatch",
        aboutHeroText: "Your premier destination for discovering and streaming the best anime series.",
        missionTitle: "Our Mission",
        missionText: "This version is for learning and academic purposes only. Unauthorized distribution is prohibited.",
        contactTitle: "Contact Us",
        labelName: "Name",
        labelEmail: "Email",
        labelMessage: "Message",
        sendBtn: "Send Message",
        // Settings page
        settingsTitle: "Settings",
        profileSettings: "Profile Settings",
        playbackPreferences: "Playback Preferences",
        appearance: "Appearance",
        usernameLabel: "Username",
        emailLabel: "Email Address",
        saveChangesBtn: "Save Changes",
        autoplayNext: "Autoplay Next Episode",
        showSubtitles: "Show Subtitles by Default",
        darkMode: "Dark Mode",
        backToHome: "Back to Home"
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
        aboutHeroTitle: "เกี่ยวกับ AnimeWatch",
        aboutHeroText: "ปลายทางชั้นนำของคุณสำหรับการค้นพบและสตรีมซีรีส์อะนิเมะที่ดีที่สุด",
        missionTitle: "ภารกิจของเรา",
        missionText: "เวอร์ชันนี้ใช้เพื่อการเรียนรู้และงานวิชาการเท่านั้น ห้ามเผยแพร่ต่อโดยไม่ได้รับอนุญาต",
        contactTitle: "ติดต่อเรา",
        labelName: "ชื่อ",
        labelEmail: "อีเมล",
        labelMessage: "ข้อความ",
        sendBtn: "ส่งข้อความ",
        // Settings page
        settingsTitle: "การตั้งค่า",
        profileSettings: "การตั้งค่าโปรไฟล์",
        playbackPreferences: "การตั้งค่าการเล่นวิดีโอ",
        appearance: "การตั้งค่ารูปลักษณ์",
        usernameLabel: "ชื่อผู้ใช้",
        emailLabel: "ที่อยู่อีเมล",
        saveChangesBtn: "บันทึกการเปลี่ยนแปลง",
        autoplayNext: "เล่นตอนถัดไปโดยอัตโนมัติ",
        showSubtitles: "แสดงคำบรรยายโดยค่าเริ่มต้น",
        darkMode: "โหมดมืด",
        backToHome: "กลับสู่หน้าแรก",
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
    changeLang(localStorage.getItem('lang') || (navigator.language.startsWith('th') ? 'th' : 'en'));
});
