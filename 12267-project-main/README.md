# AnimeWatch Navigation Integration Guide

This README provides instructions for developers to integrate the AnimeWatch navigation system, including the desktop (PC) navbar, mobile Offcanvas menu, and bilingual language-switching features.

---

## Table of Contents

1. [Dependencies](#dependencies)
2. [File Structure](#file-structure)
3. [Desktop Navbar](#desktop-navbar)
4. [Mobile Offcanvas Menu](#mobile-offcanvas-menu)
5. [Styles & Media Queries](#styles--media-queries)
6. [Language Switch Module (`lang.js`)](#language-switch-module-langjs)
7. [Usage Steps](#usage-steps)
8. [Advanced Configuration](#advanced-configuration)

---

## Dependencies

- **Bootstrap 5** (CSS & JS)  
- **Bootstrap Icons**  
- **lang.js** (bilingual language-switch script)  
- **mobile.css** (mobile-only styles)

---

## File Structure

```
project/
├─ index.html
├─ history.html
├─ favorites.html
├─ recommended.html
├─ settings.html
├─ about.html
├─ contact.html
├─ vip.html
├─ lang.js
└─ mobile.css
```

---

## Desktop Navbar

Insert at the top of each page’s `<body>`:

```html
<nav id="mainNavbar" class="navbar navbar-expand-lg fixed-top py-2">
  <div class="container-fluid px-4">
    <a class="navbar-brand" href="index.html">AnimeWatch</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navMenu">
      <ul class="navbar-nav me-auto ms-4">
        <li class="nav-item position-relative home-wrapper">
          <a class="nav-link" href="index.html" data-key="navHome">Home</a>
          <div class="menu-panel home-menu">
            <a href="index.html"><i class="bi bi-house-door-fill me-2"></i><span data-key="navHome">Home</span></a>
            <a href="about.html"><i class="bi bi-info-circle-fill me-2"></i><span data-key="navAbout">About</span></a>
            <a href="contact.html"><i class="bi bi-telephone-fill me-2"></i><span data-key="navContact">Contact</span></a>
          </div>
        </li>
        <li class="nav-item position-relative genres-wrapper">
          <a class="nav-link" href="#" data-key="navGenres">Genres</a>
          <div class="menu-panel genres-menu">
            <a href="#"><i class="bi bi-heart-fill me-2"></i><span data-key="genreRomance">Romance</span></a>
            <a href="#"><i class="bi bi-lightning-fill me-2"></i><span data-key="genreAction">Action</span></a>
            <a href="#"><i class="bi bi-emoji-smile-fill me-2"></i><span data-key="genreComedy">Comedy</span></a>
          </div>
        </li>
        <li class="nav-item"><a class="nav-link" href="#" data-key="navLatest">Latest</a></li>
      </ul>
      <div class="d-flex search-container">
        <input id="searchInput" class="form-control search-input" placeholder="Search anime…" data-key="searchInput">
      </div>
      <div class="d-flex align-items-center">
        <div class="position-relative lang-wrapper ms-3">
          <i id="iconLang" class="bi bi-translate icon-btn"></i>
          <div class="menu-panel lang-menu">
            <button id="langEnBtn">EN</button>
            <button id="langThBtn">TH</button>
          </div>
        </div>
        <div class="position-relative user-wrapper ms-3">
          <i id="iconUser" class="bi bi-person icon-btn"></i>
          <div class="menu-panel user-menu">
            <a href="history.html"><i class="bi bi-clock-history me-2"></i><span data-key="menuWatchHistory">Watch History</span></a>
            <a href="favorites.html"><i class="bi bi-star-fill me-2"></i><span data-key="menuMyFavorites">My Favorites</span></a>
            <a href="recommended.html"><i class="bi bi-lightbulb-fill me-2"></i><span data-key="menuRecommended">Recommended</span></a>
            <a href="settings.html"><i class="bi bi-gear-fill me-2"></i><span data-key="menuSettings">Settings</span></a>
            <hr>
            <a href="#"><i class="bi bi-box-arrow-right me-2"></i><span data-key="menuLogoutText">Logout</span></a>
          </div>
        </div>
        <a href="vip.html" class="btn btn-danger btn-sm ms-3" id="vipBtn" data-key="sendBtn">VIP</a>
        <span id="timeValue" class="small ms-3 d-none d-lg-inline"></span>
      </div>
    </div>
  </div>
</nav>
<div style="padding-top:70px"></div>
```

---

## Mobile Offcanvas Menu

```html
<nav class="mobile-navbar navbar fixed-top navbar-dark py-2 px-3">
  <div class="container-fluid d-flex align-items-center">
    <a class="navbar-brand mb-0" href="index.html">AnimeWatch</a>
    <input type="text" class="form-control search-input mx-2" placeholder="Search anime…">
    <button class="btn p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
      <i class="bi bi-list icon-btn"></i>
    </button>
  </div>
</nav>

<div class="offcanvas offcanvas-start" tabindex="-1" id="mobileMenu">
  <div class="offcanvas-header border-bottom border-secondary">
    <h5 class="offcanvas-title">Menu</h5>
    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
  </div>
  <div class="offcanvas-body px-3">
    <div class="lang-toggle d-flex justify-content-center gap-3 mb-3">
      <button id="langEnBtnMobile" class="btn btn-outline-light btn-sm" onclick="changeLang('en'); setActiveLangBtnMobile('en')">EN</button>
      <button id="langThBtnMobile" class="btn btn-outline-light btn-sm" onclick="changeLang('th'); setActiveLangBtnMobile('th')">TH</button>
    </div>
    <a href="history.html" class="nav-link" data-key="menuWatchHistory">Watch History</a>
    <a href="favorites.html" class="nav-link" data-key="menuMyFavorites">My Favorites</a>
    <a href="recommended.html" class="nav-link" data-key="menuRecommended">Recommended</a>
    <a href="settings.html" class="nav-link" data-key="menuSettings">Settings</a>
    <a href="about.html" class="nav-link" data-key="navAbout">About</a>
    <a href="contact.html" class="nav-link" data-key="navContact">Contact</a>
    <a href="vip.html" class="btn btn-danger btn-sm w-100 my-3" data-key="sendBtn">VIP</a>
    <a href="#" class="nav-link text-center"><i class="bi bi-box-arrow-right me-2"></i><span data-key="menuLogoutText">Logout</span></a>
  </div>
</div>
```

---

## Styles & Media Queries

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" rel="stylesheet"/>
<link rel="stylesheet" href="mobile.css"/>
<style>
  .mobile-navbar { display: none; }
  @media (max-width: 767px) {
    #mainNavbar { display: none !important; }
    .mobile-navbar { display: block !important; }
    .offcanvas, .offcanvas-body { background: #121619; color: #fff; }
    .offcanvas-header { background: #121619; border-bottom: 1px solid rgba(255,255,255,0.2); }
    .offcanvas-body .nav-link { padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.2); }
    .lang-toggle button.active { color: #00c985; }
  }
</style>
```

---

## Language Switch Module (`lang.js`)

```html
<script src="lang.js"></script>
<script>
  function setActiveLangBtnMobile(lang) {
    document.getElementById('langEnBtnMobile').classList.toggle('active', lang==='en');
    document.getElementById('langThBtnMobile').classList.toggle('active', lang==='th');
  }
  document.addEventListener('DOMContentLoaded', function() {
    const saved = localStorage.getItem('lang') || (navigator.language.startsWith('th') ? 'th' : 'en');
    setActiveLangBtnMobile(saved);
  });
</script>
```

---

## Usage Steps

1. Copy the Desktop Navbar snippet.  
2. Copy the Mobile Offcanvas Menu snippet.  
3. Include Bootstrap CSS/JS, Icons, `mobile.css`, `lang.js`, and init script.  
4. Ensure each element has `data-key` or `id` for translations.

---

## Advanced Configuration

- You can customize submenu positioning by targeting `.menu-panel`.  
- Theme toggle: switch between light/dark via CSS variables.

---

Happy Coding!

