document.addEventListener("DOMContentLoaded", () => {

  // ====================== FULL COLLECTION DATA ======================
  const collectionData = [
    { id: "1", panel: "1", name: "Black Guard Core Figure", category: "Core Figures: Wave One", img: "images/blck-tron.jpg" },
    { id: "2", panel: "2", name: "CLU Core Figure", category: "Core Figures: Wave One", img: "images/clu_tron.jpg" },
    { id: "3", panel: "3", name: "CLU Sentry Core Figure", category: "Core Figures: Wave One", img: "images/clu2_tron.jpg" },
    { id: "4", panel: "4", name: "Kevin Flynn Core Figure", category: "Core Figures: Wave One", img: "images/Kevin_tron.jpg" },
    { id: "5", panel: "5", name: "Rinzler Core Figure", category: "Core Figures: Wave One", img: "images/Rinzler_tron.jpg" },
    { id: "6", panel: "6", name: "Sam Flynn Core Figure", category: "Core Figures: Wave One", img: "images/sam_flynn.jpg" },
    { id: "7", panel: "7", name: "Castor Core Figure", category: "Core Figures: Wave Two", img: "images/Castor_tron.jpg" },
    { id: "8", panel: "8", name: "Quorra Core Figure", category: "Core Figures: Wave Two", img: "images/Quorra_tron.jpg" },
    { id: "9", panel: "9", name: "Jarvis Core Figure", category: "Core Figures: Wave Two", img: "images/jarvis_tron.webp" },
    { id: "10", panel: "10", name: "Deluxe Black Guard", category: "Core Figures: Deluxe Figures", img: "images/deluxe_blck_guard_tron.webp" },
    { id: "11", panel: "11", name: "Deluxe CLU Figure", category: "Core Figures: Deluxe Figures", img: "images/deluxe_clu_tron.jpg" },
    { id: "12", panel: "12", name: "Deluxe Rinzler Figure", category: "Core Figures: Deluxe Figures", img: "images/deluxe_Rin.jpg" },
    { id: "13", panel: "13", name: "Deluxe Sam Flynn Figure", category: "Core Figures: Deluxe Figures", img: "images/Deluxe_sam.jpg" },
    { id: "14", panel: "14", name: "Kevin Flynn Hot Toys", category: "Hot Toys & Statues", img: "images/db79.jpg" },
    { id: "15", panel: "15", name: "Sam Flynn Hot Toys", category: "Hot Toys & Statues", img: "images/db80.jpg" },
    { id: "16", panel: "16", name: "Rinzler Sideshow Statue", category: "Hot Toys & Statues", img: "images/db81.jpg" },
    { id: "17", panel: "17", name: "Daft Punk Hot Toys", category: "Hot Toys & Statues", img: "images/db82.webp" },
    { id: "18", panel: "18", name: "Ultimate CLU", category: "Core Figures: Ultimate Figures", img: "images/ultimate_clu.webp" },
    { id: "19", panel: "19", name: "Ultimate Sam Flynn", category: "Core Figures: Ultimate Figures", img: "images/ultimate_clu.webp" },
    { id: "20", panel: "20", name: "Kevin Flynn's Core Light Cycle", category: "Core Vehicles", img: "images/kevin_deluxe_light.webp" },
    { id: "21", panel: "21", name: "One Man Light Jet", category: "Core Vehicles", img: "images/one_man.webp" },
    { id: "22", panel: "22", name: "Deluxe Light Runner", category: "Core Vehicles: Deluxe", img: "images/deluxe_light.jpg" },
    { id: "23", panel: "23", name: "Sam Flynn's Deluxe Light Cycle", category: "Core Vehicles: Deluxe", img: "images/deluxe_sam2.jpg" },
    { id: "24", panel: "24", name: "CLU's Deluxe Light Cycle", category: "Core Vehicles: Deluxe", img: "images/deluxe_clu2.webp" },
    { id: "25", panel: "25", name: "Core Rinzler Identity Disc", category: "Identity Discs", img: "images/cheap1.jpg" },
    { id: "26", panel: "26", name: "Core Sam Flynn Identity Disc", category: "Identity Discs", img: "images/cheap2.jpg" },
    { id: "27", panel: "27", name: "Deluxe Sam Flynn Identity Disc", category: "Identity Discs", img: "images/id2.jpg" },
    { id: "28", panel: "28", name: "Deluxe Rinzler Identity Disc", category: "Identity Discs", img: "images/id1.jpg" },
    { id: "29", panel: "29", name: "Deluxe Kevin Flynn Identity Disc", category: "Identity Discs", img: "images/id3.jpg" },
    { id: "30", panel: "30", name: "Kevin Flynn Wave Three", category: "Identity Discs", img: "images/db75.webp" },
    { id: "31", panel: "31", name: "Sam Flynn Wave Three", category: "Identity Discs", img: "images/db76.webp" },
    { id: "32", panel: "32", name: "Ares Identity Disc", category: "Identity Discs", img: "images/db77.jpg" },
    { id: "33", panel: "33", name: "CLU's Sentry Die Cast Light Cycle", category: "Die Cast Vehicles", img: "images/s1.jpg" },
    { id: "34", panel: "34", name: "CLU's Command Ship Die Cast", category: "Die Cast Vehicles", img: "images/s2.jpg" },
    { id: "35", panel: "35", name: "CLU's Die Cast Light Cycle", category: "Die Cast Vehicles", img: "images/s3.jpg" },
    { id: "36", panel: "36", name: "Kevin Flynn's Die Cast Light Cycle", category: "Die Cast Vehicles", img: "images/s4.jpg" },
    { id: "37", panel: "37", name: "Sam Flynn's Die Cast Light Cycle", category: "Die Cast Vehicles", img: "images/s5.jpg" },
    { id: "38", panel: "38", name: "Light Runner Die Cast", category: "Die Cast Vehicles", img: "images/s6.jpg" },
    { id: "39", panel: "39", name: "Recognizer Die Cast", category: "Die Cast Vehicles", img: "images/s7.jpg" },
    { id: "40", panel: "40", name: "One Man Light Jet Die Cast", category: "Die Cast Vehicles", img: "images/s8.jpg" },
    { id: "41", panel: "41", name: "Three Man Jet Die Cast", category: "Die Cast Vehicles", img: "images/s9.jpg" },
    { id: "42", panel: "42", name: "Grid Limo Die Cast", category: "Die Cast Vehicles", img: "images/s12.jpg" },
    { id: "43", panel: "43", name: "Die Cast Hero 3-pack (Set A)", category: "Die Cast Vehicles", img: "images/s10.jpg" },
    { id: "44", panel: "44", name: "Die Cast Hero 3-pack (Set B)", category: "Die Cast Vehicles", img: "images/s11.jpg" },
    { id: "45", panel: "45", name: "Coliseum Disc Battle", category: "Playsets & Other", img: "images/coliseum.webp" },
    { id: "46", panel: "46", name: "Light Cycle Pursuit Set", category: "Playsets & Other", img: "images/light_cycle_pursuit.webp" },
    { id: "47", panel: "47", name: "Recognizer Playset", category: "Playsets & Other", img: "images/Recognizer_playset.webp" },
    { id: "48", panel: "48", name: "Tron Legacy Lego", category: "Playsets & Other", img: "images/db20.jpg" },
    { id: "49", panel: "49", name: "Monster Tron Light Disc Speaker", category: "Playsets & Other", img: "images/db21.jpg" },
    { id: "50", panel: "50", name: "Sam Flynn 4GB USB", category: "Playsets & Other", img: "images/db31.webp" },
    { id: "51", panel: "51", name: "Kevin Flynn 8GB USB", category: "Playsets & Other", img: "images/db32.jpg" },
    { id: "52", panel: "52", name: "CLU Ornament", category: "Playsets & Other", img: "images/db78.webp" },
    { id: "53", panel: "53", name: "Sam Flynn Ornament", category: "Playsets & Other", img: "images/db79.webp" },
    { id: "54", panel: "54", name: "Razer Tron Mouse", category: "Gaming Exclusives", img: "images/db22.webp" },
    { id: "55", panel: "55", name: "Razer Tron Mouse Mat", category: "Gaming Exclusives", img: "images/db23.webp" },
    { id: "56", panel: "56", name: "Razer Tron Keyboard", category: "Gaming Exclusives", img: "images/db24.jpg" },
    { id: "57", panel: "57", name: "Tron Evolution Collectible", category: "Gaming Exclusives", img: "images/db25.jpg" },
    { id: "58", panel: "58", name: "PDP Wii Tron Controller", category: "Gaming Exclusives", img: "images/db26.webp" },
    { id: "59", panel: "59", name: "PDP XBox 360 Lime Green", category: "Gaming Exclusives", img: "images/db27.webp" },
    { id: "60", panel: "60", name: "PDP XBox 360 White", category: "Gaming Exclusives", img: "images/db28.webp" },
    { id: "61", panel: "61", name: "PDP XBox 360 Orange", category: "Gaming Exclusives", img: "images/db29.webp" },
    { id: "62", panel: "62", name: "PDP XBox 360 White Siren", category: "Gaming Exclusives", img: "images/db30.webp" },
    { id: "63", panel: "63", name: "PDP XBox 360 Blue", category: "Gaming Exclusives", img: "images/db33.jpg" },
    { id: "64", panel: "64", name: "PSP Tron Evolution", category: "Gaming Exclusives", img: "images/db34.jpg" },
    { id: "65", panel: "65", name: "PC Tron Evolution", category: "Gaming Exclusives", img: "images/db35.webp" },
    { id: "66", panel: "66", name: "XBox 360 Tron Evolution", category: "Gaming Exclusives", img: "images/db36.webp" },
    { id: "67", panel: "67", name: "PS3 Tron Evolution", category: "Gaming Exclusives", img: "images/db37.webp" },
    { id: "68", panel: "68", name: "Wii Tron Evolution Battle Grids", category: "Gaming Exclusives", img: "images/db38.webp" },
    { id: "69", panel: "69", name: "Baton Launcher", category: "Target Exclusives", img: "images/f1.webp" },
    { id: "70", panel: "70", name: "CLU's Light Cycle + Quorra", category: "Target Exclusives", img: "images/f2.webp" },
    { id: "71", panel: "71", name: "Forming Light Cycle Sam Flynn", category: "Target Exclusives", img: "images/f3.jpg" },
    { id: "72", panel: "72", name: "Rinzler + Quorra Action Pack", category: "Target Exclusives", img: "images/f4.webp" },
    { id: "73", panel: "73", name: "Sam Flynn's Light Cycle + Sentry", category: "Target Exclusives", img: "images/f5.jpg" },
    { id: "74", panel: "74", name: "Sam Flynn + Rinzler Disc Battle 1", category: "Target Exclusives", img: "images/f6.jpg" },
    { id: "75", panel: "75", name: "Sam Flynn + Rinzler Disc Battle 2", category: "Target Exclusives", img: "images/f7.jpg" },
    { id: "76", panel: "76", name: "Jarvis + Black Guard", category: "Target Exclusives", img: "images/f8.jpg" },
    { id: "77", panel: "77", name: "Sam Flynn + Tron Arcade", category: "Target Exclusives", img: "images/f9.webp" },
    { id: "78", panel: "78", name: "Sam Flynn + Siren", category: "Target Exclusives", img: "images/f10.jpg" },
    { id: "79", panel: "79", name: "Black Guard + Rinzler Light Cycle", category: "Target Exclusives", img: "images/f11.jpg" },
    { id: "80", panel: "80", name: "CLU + Castor Action Pack", category: "Target Exclusives", img: "images/f12.jpg" },
    { id: "81", panel: "81", name: "Sam Flynn + CLU", category: "Target Exclusives", img: "images/f13.jpg" },
    { id: "82", panel: "82", name: "Black Guard + Vintage Light Cycle", category: "Target Exclusives", img: "images/f14.jpg" },
    { id: "83", panel: "83", name: "Black Guard + Sam Flynn", category: "Target Exclusives", img: "images/f15.jpg" },
    { id: "84", panel: "84", name: "Light Cycle: CLU Zero Gravity R/C", category: "Air Hogs", img: "images/rc1.webp" },
    { id: "85", panel: "85", name: "Light Cycle: Sam Flynn Zero Gravity R/C", category: "Air Hogs", img: "images/rc2.jpg" },
    { id: "86", panel: "86", name: "Translucence Blue Vinyl", category: "Tron Vinyls", img: "images/db45.jpg" },
    { id: "87", panel: "87", name: "Translucence Red Vinyl", category: "Tron Vinyls", img: "images/db44.jpg" },
    { id: "88", panel: "88", name: "Translucence Orange Vinyl", category: "Tron Vinyls", img: "images/db43.jpg" },
    { id: "89", panel: "89", name: "Tron Legacy Vinyl", category: "Tron Vinyls", img: "images/db49.jpg" },
    { id: "90", panel: "90", name: "Tron Legacy Target Vinyl", category: "Tron Vinyls", img: "images/db46.jpg" },
    { id: "91", panel: "91", name: "Tron Legacy 10th Anniversary Vinyl", category: "Tron Vinyls", img: "images/db47.jpg" },
    { id: "92", panel: "92", name: "Tron Legacy Reconfigured Vinyl", category: "Tron Vinyls", img: "images/db48.jpg" },
    { id: "93", panel: "93", name: "Tron Legacy Reconfigured Green", category: "Tron Vinyls", img: "images/db55.jpg" },
    { id: "94", panel: "94", name: "Tron Ares Vinyl", category: "Tron Vinyls", img: "images/db50.jpg" },
    { id: "95", panel: "95", name: "Tron Ares Target Vinyl", category: "Tron Vinyls", img: "images/db51.jpg" },
    { id: "96", panel: "96", name: "Tron Ares Hot Topic Vinyl", category: "Tron Vinyls", img: "images/db52.jpg" },
    { id: "97", panel: "97", name: "Tron Ares Comic Con Vinyl", category: "Tron Vinyls", img: "images/db53.jpeg" },
    { id: "98", panel: "98", name: "Walmart Exclusive Tron Legacy", category: "Media", img: "images/db42.jpg" },
    { id: "99", panel: "99", name: "Tron Legacy Collectors Edition", category: "Media", img: "images/db56.jpg" },
    { id: "100", panel: "100", name: "Tron Legacy DVD", category: "Media", img: "images/db57.jpg" },
    { id: "101", panel: "101", name: "Tron Legacy Blu-ray", category: "Media", img: "images/db58.jpg" },
    { id: "102", panel: "102", name: "Tron 1982 DVD", category: "Media", img: "images/db59.jpg" },
    { id: "103", panel: "103", name: "Tron 1982 Blu-ray", category: "Media", img: "images/db60.jpg" },
    { id: "104", panel: "104", name: "Tron Ares DVD", category: "Media", img: "images/db61.webp" },
    { id: "105", panel: "105", name: "Tron Ares SteelBook 2025", category: "Media", img: "images/db62.jpg" },
    { id: "106", panel: "106", name: "Tron Legacy SteelBook 2025", category: "Media", img: "images/db63.jpg" },
    { id: "107", panel: "107", name: "Tron SteelBook 2025", category: "Media", img: "images/db66.jpg" },
    { id: "108", panel: "108", name: "Tron Legacy Original SteelBook", category: "Media", img: "images/db64.jpg" },
    { id: "109", panel: "109", name: "Tron Legacy 4k UltraHD", category: "Media", img: "images/db65.jpg" },
    { id: "110", panel: "110", name: "Sark #404 Dorbz", category: "Dorbz", img: "images/db1.jpg" },
    { id: "111", panel: "111", name: "Tron #403 Dorbz", category: "Dorbz", img: "images/db2.jpg" },
    { id: "112", panel: "112", name: "Tron Chase #403 Dorbz", category: "Dorbz", img: "images/db3.jpg" },
    { id: "113", panel: "113", name: "Tron on Light Cycle #134", category: "Funko Pops", img: "images/db4.jpg" },
    { id: "114", panel: "114", name: "Kevin Flynn #1854", category: "Funko Pops", img: "images/db5.jpg" },
    { id: "115", panel: "115", name: "Kevin Flynn #1856 GITD", category: "Funko Pops", img: "images/db6.jpg" },
    { id: "116", panel: "116", name: "Sark #490", category: "Funko Pops", img: "images/db7.jpg" },
    { id: "117", panel: "117", name: "Sark Chase #490", category: "Funko Pops", img: "images/db8.jpg" },
    { id: "118", panel: "118", name: "Tron #489", category: "Funko Pops", img: "images/db9.jpg" },
    { id: "119", panel: "119", name: "Tron Chase #489", category: "Funko Pops", img: "images/db10.jpg" },
    { id: "120", panel: "120", name: "Yori #1855", category: "Funko Pops", img: "images/db11.jpg" },
    { id: "121", panel: "121", name: "Tron Bitty Arcade", category: "Funko Pops", img: "images/bit.webp" },
    { id: "122", panel: "122", name: "Freddy Funko as Tron #se (1)", category: "Funko Pops", img: "images/db16.webp" },
    { id: "123", panel: "123", name: "Freddy Funko as Tron #se (2)", category: "Funko Pops", img: "images/db17.webp" },
    { id: "124", panel: "124", name: "Sora/Goofy/Donald Pack", category: "Funko Pops", img: "images/db18.webp" },
    { id: "125", panel: "125", name: "Sora/Goofy/Donald Chase Pack", category: "Funko Pops", img: "images/db19.jpg" },
    { id: "126", panel: "126", name: "Digital Stan #36", category: "Funko Pops", img: "images/db54.webp" },
    { id: "127", panel: "127", name: "Funko Pez: Tron", category: "Funko Pops", img: "images/db83.jpg" },
    { id: "128", panel: "128", name: "Funko Pez: Sark", category: "Funko Pops", img: "images/db84.jpg" },
    { id: "129", panel: "129", name: "Athena + Light Cycle #316", category: "Tron Ares Pops", img: "images/db12.jpg" },
    { id: "130", panel: "130", name: "Ares #1965", category: "Tron Ares Pops", img: "images/db13.jpg" },
    { id: "131", panel: "131", name: "Kevin Flynn #1966", category: "Tron Ares Pops", img: "images/db14.jpg" },
    { id: "132", panel: "132", name: "Eve Kim #1970", category: "Tron Ares Pops", img: "images/db21.webp" },
    { id: "133", panel: "133", name: "Infinity Sam Flynn", category: "Disney Infinity", img: "images/db15.jpg" },
    { id: "134", panel: "134", name: "Infinity Quorra", category: "Disney Infinity", img: "images/db15.jpg" },
    { id: "135", panel: "135", name: "Tron Vinylation", category: "Tron Vinylation", img: "images/db67.webp" },
    { id: "136", panel: "136", name: "Rinzler Vinylation", category: "Tron Vinylation", img: "images/db68.webp" },
    { id: "137", panel: "137", name: "Jarvis Vinylation", category: "Tron Vinylation", img: "images/db69.webp" },
    { id: "138", panel: "138", name: "Kevin Flynn Vinylation", category: "Tron Vinylation", img: "images/db70.webp" },
    { id: "139", panel: "139", name: "Sam Flynn Vinylation", category: "Tron Vinylation", img: "images/db71.webp" },
    { id: "140", panel: "140", name: "Castor Vinylation", category: "Tron Vinylation", img: "images/db72.webp" },
    { id: "141", panel: "141", name: "CLU Vinylation", category: "Tron Vinylation", img: "images/db73.webp" },
    { id: "142", panel: "142", name: "Rinzler Vinylation (Alt)", category: "Tron Vinylation", img: "images/db74.webp" },
    { id: "143", panel: "143", name: "Light-up Sam Flynn Helmet Replica", category: "2023 Disney Magic Kingdom", img: "images/db85.png" },
    { id: "144", panel: "144", name: "TRON Lightcycle Handlebars", category: "2023 Disney Magic Kingdom", img: "images/db86.webp" },
    { id: "145", panel: "145", name: "Sam Flynn Identity Disc Chip", category: "2023 Disney Magic Kingdom", img: "images/db87.jpg" },
    { id: "146", panel: "146", name: "Rinzler Identity Disc Chip", category: "2023 Disney Magic Kingdom", img: "images/db88.jpg" },
    { id: "147", panel: "147", name: "Clu Identity Disc Chip", category: "2023 Disney Magic Kingdom", img: "images/db89.jpg" },
    { id: "148", panel: "148", name: "Quorra Identity Disc Chip", category: "2023 Disney Magic Kingdom", img: "images/db90.jpg" },
    { id: "149", panel: "149", name: "Identity Disc Backpack", category: "2023 Disney Magic Kingdom", img: "images/db91.jpg" },
    { id: "150", panel: "150", name: "Identity Disc Bluetooth Speaker", category: "2023 Disney Magic Kingdom", img: "images/db92.jpg" },
    { id: "151", panel: "151", name: "Lightcycle Color Changing Die Cast Vehicle", category: "2023 Disney Magic Kingdom", img: "images/db93.jpg" },
    { id: "152", panel: "152", name: "Light Jet Die Cast Vehicle", category: "2023 Disney Magic Kingdom", img: "images/db94.jpg" },
    { id: "153", panel: "153", name: "Remote Control TRON Lightcycle", category: "2023 Disney Magic Kingdom", img: "images/db95.jpg" },
    { id: "154", panel: "154", name: "Tron Light Runner Die Cast Vehicle", category: "2023 Disney Magic Kingdom", img: "images/db96.webp" },
    { id: "155", panel: "155", name: "Disney Parks 2025 TRON Lightcycle Track NIB", category: "2023 Disney Magic Kingdom", img: "images/db97.webp" }
  ];

  // ====================== LOCAL STORAGE STATES ======================
  let collected = JSON.parse(localStorage.getItem("tronCollected")) || {};
  let sources = JSON.parse(localStorage.getItem("tronSources")) || {};
  let gradings = JSON.parse(localStorage.getItem("tronGradings")) || {};
  let userPrices = JSON.parse(localStorage.getItem("tronPrices")) || {};
  let favorites = JSON.parse(localStorage.getItem("tronFavorites")) || {};
  let wishlist = JSON.parse(localStorage.getItem("tronWishlist")) || {};

  const renderCollection = (data) => {
    const grid = document.getElementById("collection-grid");
    grid.innerHTML = "";

    data.forEach(item => {
      const isOwned = !!collected[item.id];
      const isFav = !!favorites[item.id];
      const isWish = !!wishlist[item.id];
      const price = userPrices[item.id] || "";
      const savedGrade = gradings[item.id] || "";

      const html = `
        <article class="card ${isOwned ? 'is-collected' : ''}">
          <div class="image-container">
            <span class="fav-star ${isFav ? 'is-favorite' : ''}" data-id="${item.id}">★</span>
            <span class="wish-icon ${isWish ? 'is-wishlist' : ''}" data-id="${item.id}">🎁</span>
            <img src="${item.img}" alt="Panel ${item.panel}" data-id="${item.id}">
          </div>
          <p><span class="panel-title ${isOwned ? 'collected' : ''}" data-panel="${item.id}">Panel ${item.panel}</span><br>${item.name}</p>
          <div class="card-controls">
            
            <select class="source-select" data-id="${item.id}">
              <option value="unowned" ${sources[item.id]==='unowned'?'selected':''}>Not Owned</option>
              <option value="bought" ${sources[item.id]==='bought'?'selected':''}>Bought</option>
              <option value="gift" ${sources[item.id]==='gift'?'selected':''}>Gift</option>
            </select>

            <select class="grading-select" data-id="${item.id}">
              <option value="" disabled ${savedGrade === '' ? 'selected' : ''} hidden>Select Condition</option>
              <option value="moc" ${savedGrade==='moc'?'selected':''}>MOC (Mint on Card) — sealed</option>
              <option value="mib" ${savedGrade==='mib'?'selected':''}>MIB (Mint in Box) — perfect</option>
              <option value="loose-complete" ${savedGrade==='loose-complete'?'selected':''}>Loose / Complete</option>
              <option value="loose-incomplete" ${savedGrade==='loose-incomplete'?'selected':''}>Loose / Incomplete</option>
              <option value="damaged" ${savedGrade==='damaged'?'selected':''}>Damaged — box damage</option>
            </select>

            <input type="number" class="price-input" data-id="${item.id}" placeholder="$ Spent" step="0.01" value="${price}">
          </div>
        </article>`;
      grid.insertAdjacentHTML('beforeend', html);
    });

    attachListeners();
    updateProgress();
  };

  const attachListeners = () => {
    document.querySelectorAll('.card img').forEach(img => {
      img.addEventListener('click', () => {
        const id = img.dataset.id;
        if (collected[id]) {
          delete collected[id];
        } else {
          collected[id] = true;
          if (wishlist[id]) delete wishlist[id];
          localStorage.setItem("tronWishlist", JSON.stringify(wishlist));
        }
        localStorage.setItem("tronCollected", JSON.stringify(collected));
        renderCollection(getFilteredData());
      });
    });

    document.querySelectorAll('.fav-star').forEach(star => {
      star.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = star.dataset.id;
        if (favorites[id]) {
          delete favorites[id];
        } else {
          favorites[id] = true;
        }
        localStorage.setItem("tronFavorites", JSON.stringify(favorites));
        renderCollection(getFilteredData());
      });
    });

    document.querySelectorAll('.wish-icon').forEach(icon => {
      icon.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = icon.dataset.id;
        if (wishlist[id]) {
          delete wishlist[id];
        } else {
          wishlist[id] = true;
        }
        localStorage.setItem("tronWishlist", JSON.stringify(wishlist));
        renderCollection(getFilteredData());
      });
    });

    document.querySelectorAll('.source-select').forEach(sel => {
      sel.addEventListener('change', () => {
        sources[sel.dataset.id] = sel.value;
        localStorage.setItem("tronSources", JSON.stringify(sources));
      });
    });

    document.querySelectorAll('.grading-select').forEach(gradeSel => {
      gradeSel.addEventListener('change', () => {
        gradings[gradeSel.dataset.id] = gradeSel.value;
        localStorage.setItem("tronGradings", JSON.stringify(gradings));
      });
    });

    document.querySelectorAll('.price-input').forEach(input => {
      input.addEventListener('input', () => {
        userPrices[input.dataset.id] = input.value;
        localStorage.setItem("tronPrices", JSON.stringify(userPrices));
        updateProgress();
      });
    });
  };

  const getFilteredData = () => {
    const term = document.getElementById("collectionSearch").value.toLowerCase().trim();
    const status = document.getElementById("statusFilter").value;

    return collectionData.filter(item => {
      const matchSearch = !term || 
        item.name.toLowerCase().includes(term) || 
        item.panel === term ||
        item.category.toLowerCase().includes(term);

      const isOwned = !!collected[item.id];
      const isFav = !!favorites[item.id];
      const isWish = !!wishlist[item.id];
      
      let matchStatus = false;
      if (status === "all") matchStatus = true;
      else if (status === "owned" && isOwned) matchStatus = true;
      else if (status === "favorites" && isFav) matchStatus = true;
      else if (status === "wishlist" && isWish) matchStatus = true;

      return matchSearch && matchStatus;
    });
  };

  window.filterCollection = () => renderCollection(getFilteredData());

  const updateProgress = () => {
    const total = collectionData.length;
    const owned = Object.keys(collected).length;
    const value = Object.values(userPrices).reduce((a, b) => a + (parseFloat(b)||0), 0);

    document.getElementById("progress-bar-fill").style.width = `${total ? Math.round(owned/total*100) : 0}%`;
    document.getElementById("total-percent").textContent = `${total ? Math.round(owned/total*100) : 0}%`;
    document.getElementById("total-worth").textContent = `$${value.toFixed(2)}`;
  };

  const populateSidebar = () => {
    const cats = [...new Set(collectionData.map(i => i.category))];
    const ul = document.getElementById("category-list");
    ul.innerHTML = `<li data-category="all" class="active">All Items</li>`;

    cats.forEach(cat => {
      const li = document.createElement("li");
      li.textContent = cat;
      li.dataset.category = cat;
      ul.appendChild(li);
    });

    ul.addEventListener("click", e => {
      if (!e.target.dataset.category) return;
      document.querySelectorAll("#category-list li").forEach(li => li.classList.remove("active"));
      e.target.classList.add("active");

      const cat = e.target.dataset.category;
      const filtered = cat === "all" ? collectionData : collectionData.filter(i => i.category === cat);
      renderCollection(filtered);
    });
  };

  document.getElementById("resetCollected").addEventListener("click", () => {
    if (confirm("De-rez all data? This will clear everything.")) {
      localStorage.clear();
      location.reload();
    }
  });

  // ====================== BACK TO TOP CONTROLLER ======================
  const backToTop = document.getElementById("backToTop");
  let scrollTimeout;

  window.addEventListener("scroll", () => {
    if (window.innerWidth <= 900) {
      backToTop.classList.remove("show");
      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 300) {
          backToTop.classList.add("show");
        }
      }, 250);
    } else {
      if (window.scrollY > 300) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    }
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Initialize System Core
  populateSidebar();
  renderCollection(collectionData);
});
