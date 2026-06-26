// VideoHub Premium UI Clone - Logic & Interactions

// Mock Video Database (12+ Premium Video Objects)
const videosData = [
  {
    id: 1,
    title: "Build a Modern Spotify Clone using Pure CSS & JavaScript (Step-by-Step Guide)",
    channelName: "CodeCraft",
    views: "342K views",
    uploadTime: "3 days ago",
    duration: "42:15",
    thumbnailUrl: "images/spotify_clone_thumb.jpg",
    avatarUrl: "images/avatar_codecraft.jpg",
    isLive: false,
    isVerified: true,
    category: "Web Development"
  },
  {
    id: 2,
    title: "10-Hour Deep Focus Lofi Hip Hop Mix 📚 Beats to Study/Relax to",
    channelName: "Music Vibes",
    views: "1.2M views",
    uploadTime: "2 weeks ago",
    duration: "10:00:00",
    thumbnailUrl: "images/lofi_beats_thumb.jpg",
    avatarUrl: "images/avatar_musicvibes.jpg",
    isLive: false,
    isVerified: true,
    category: "Lo-Fi Beats"
  },
  {
    id: 3,
    title: "The Ultimate Guide to Advanced JavaScript Core Design Patterns",
    channelName: "CodeCraft",
    views: "89K views",
    uploadTime: "5 days ago",
    duration: "28:10",
    thumbnailUrl: "images/js_patterns_thumb.jpg",
    avatarUrl: "images/avatar_codecraft.jpg",
    isLive: false,
    isVerified: true,
    category: "JavaScript"
  },
  {
    id: 4,
    title: "ELDEN RING Night’s Cavalry & Boss Rush [Max Difficulty Walkthrough]",
    channelName: "Gaming Hub",
    views: "520K views",
    uploadTime: "1 day ago",
    duration: "18:45",
    thumbnailUrl: "images/elden_ring_thumb.jpg",
    avatarUrl: "images/avatar_gaming.jpg",
    isLive: false,
    isVerified: false,
    category: "Gaming"
  },
  {
    id: 5,
    title: "Are We Alone? Finding Intelligent Alien Life in Outer Space",
    channelName: "Science & Space",
    views: "2.1M views",
    uploadTime: "1 month ago",
    duration: "22:04",
    thumbnailUrl: "images/alien_life_thumb.jpg",
    avatarUrl: "images/avatar_science.jpg",
    isLive: false,
    isVerified: true,
    category: "Science & Space"
  },
  {
    id: 6,
    title: "Is ChatGPT 5 Actually Releasing Sooner Than We Think? | Tech Insider",
    channelName: "TechInsider",
    views: "750K views",
    uploadTime: "12 hours ago",
    duration: "12:30",
    thumbnailUrl: "images/chatgpt_thumb.jpg",
    avatarUrl: "images/avatar_techinsider.png",
    isLive: true,
    isVerified: true,
    category: "AI Technology"
  },
  {
    id: 7,
    title: "Modern UI/UX Design System Walkthrough: Figma to Code Tutorial",
    channelName: "Creative Design",
    views: "120K views",
    uploadTime: "4 days ago",
    duration: "34:02",
    thumbnailUrl: "images/figma_uiux_thumb.jpg",
    avatarUrl: "images/avatar_creative.jpg",
    isLive: false,
    isVerified: true,
    category: "UI/UX Design"
  },
  {
    id: 8,
    title: "Cooking 3-Star Michelin Meals at Home in Under 30 Minutes!",
    channelName: "Chef at Home",
    views: "980K views",
    uploadTime: "6 days ago",
    duration: "15:40",
    thumbnailUrl: "images/michelin_meals_thumb.jpg",
    avatarUrl: "images/avatar_chef.jpg",
    isLive: false,
    isVerified: false,
    category: "Cooking"
  },
  {
    id: 9,
    title: "The Solo Travel Guide to Kyoto: Discovering Japan's Hidden Shrines",
    channelName: "Wanderlust",
    views: "43K views",
    uploadTime: "1 week ago",
    duration: "24:18",
    thumbnailUrl: "images/kyoto_travel_thumb.jpg",
    avatarUrl: "images/avatar_wanderlust.jpg",
    isLive: false,
    isVerified: false,
    category: "Outdoor Travel"
  },
  {
    id: 10,
    title: "Why Everyone is Buying the New 2026 Foldable Smartphone",
    channelName: "TechInsider",
    views: "1.4M views",
    uploadTime: "2 days ago",
    duration: "08:55",
    thumbnailUrl: "images/foldable_phone_thumb.jpg",
    avatarUrl: "images/avatar_techinsider.png",
    isLive: false,
    isVerified: true,
    category: "Smartphones"
  },
  {
    id: 11,
    title: "Ambient Space Soundscapes for Sleep, Deep Sleep & Meditation",
    channelName: "Ambient Music",
    views: "2.3M views",
    uploadTime: "3 months ago",
    duration: "8:00:00",
    thumbnailUrl: "images/space_ambient_thumb.jpg",
    avatarUrl: "images/avatar_ambient.jpg",
    isLive: false,
    isVerified: true,
    category: "Ambient Music"
  },
  {
    id: 12,
    title: "My Top 10 Favorite Anime Series of All Time (Ranked & Reviewed)",
    channelName: "Otaku Culture",
    views: "180K views",
    uploadTime: "10 days ago",
    duration: "21:50",
    thumbnailUrl: "images/anime_ranked_thumb.jpg",
    avatarUrl: "images/avatar_otaku.jpg",
    isLive: false,
    isVerified: false,
    category: "Anime & Manga"
  },
  {
    id: 13,
    title: "How to Build a Custom Web Browser from Scratch (C++ & Chromium API)",
    channelName: "CodeCraft",
    views: "95K views",
    uploadTime: "3 days ago",
    duration: "55:12",
    thumbnailUrl: "images/spotify_clone_thumb.jpg",
    avatarUrl: "images/avatar_codecraft.jpg",
    isLive: false,
    isVerified: true,
    category: "Web Development"
  },
  {
    id: 14,
    title: "Relaxing Cafe Jazz Instrumental Music to Boost Your Creativity",
    channelName: "Music Vibes",
    views: "3.2M views",
    uploadTime: "4 months ago",
    duration: "3:00:00",
    thumbnailUrl: "images/lofi_beats_thumb.jpg",
    avatarUrl: "images/avatar_musicvibes.jpg",
    isLive: false,
    isVerified: true,
    category: "Lo-Fi Beats"
  }
];

// Category Tags
const categories = [
  "All",
  "Web Development",
  "JavaScript",
  "Lo-Fi Beats",
  "Gaming",
  "Science & Space",
  "AI Technology",
  "UI/UX Design",
  "Cooking",
  "Outdoor Travel",
  "Smartphones",
  "Ambient Music",
  "Anime & Manga"
];

// State Manager
let currentCategory = "All";
let searchQuery = "";

// Element Selectors
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const contentWrapper = document.getElementById('content-wrapper');
const categoriesBar = document.getElementById('categories-bar');
const scrollLeftBtn = document.getElementById('scroll-left-btn');
const scrollRightBtn = document.getElementById('scroll-right-btn');
const videosGrid = document.getElementById('videos-grid');
const skeletonGrid = document.getElementById('skeleton-grid');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search-btn');
const profileContainer = document.getElementById('profile-container');
const profileDropdown = document.getElementById('profile-dropdown');

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
  setupSidebar();
  setupCategories();
  setupProfileDropdown();
  setupSearch();
  loadVideosWithSkeleton();
});

// 1. Sidebar Toggling Logic (Desktop vs. Mobile Responsive Mode)
function setupSidebar() {
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const width = window.innerWidth;
    
    if (width >= 768) {
      // Desktop: Toggle collapsed / expanded states
      if (sidebar.classList.contains('expanded')) {
        sidebar.classList.remove('expanded');
        sidebar.classList.add('collapsed');
        contentWrapper.classList.remove('sidebar-expanded');
        contentWrapper.classList.add('sidebar-collapsed');
      } else {
        sidebar.classList.remove('collapsed');
        sidebar.classList.add('expanded');
        contentWrapper.classList.remove('sidebar-collapsed');
        contentWrapper.classList.add('sidebar-expanded');
      }
    } else {
      // Mobile: Slide in drawer overlay
      sidebar.classList.toggle('show-mobile-drawer');
    }
  });

  // Close mobile sidebar drawer when clicking outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth < 768) {
      if (!sidebar.contains(e.target) && e.target !== menuBtn) {
        sidebar.classList.remove('show-mobile-drawer');
      }
    }
  });

  // Handle window resizing sidebar behavior reset
  window.addEventListener('resize', () => {
    const width = window.innerWidth;
    sidebar.classList.remove('show-mobile-drawer');
    if (width >= 768) {
      if (sidebar.classList.contains('collapsed')) {
        contentWrapper.classList.add('sidebar-collapsed');
        contentWrapper.classList.remove('sidebar-expanded');
      } else {
        contentWrapper.classList.add('sidebar-expanded');
        contentWrapper.classList.remove('sidebar-collapsed');
      }
    } else {
      contentWrapper.classList.remove('sidebar-expanded', 'sidebar-collapsed');
    }
  });
}

// 2. Categories Layout and Horizontal Scroll controls
function setupCategories() {
  // Render tags
  categories.forEach((cat) => {
    const btn = document.createElement('button');
    btn.className = `category-btn${cat === currentCategory ? ' active' : ''}`;
    btn.textContent = cat;
    btn.addEventListener('click', () => {
      // Remove active from others
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      currentCategory = cat;
      loadVideosWithSkeleton();
    });
    categoriesBar.appendChild(btn);
  });

  // Check scroll bounds to show/hide arrow buttons
  const checkScrollArrows = () => {
    const scrollLeft = categoriesBar.scrollLeft;
    const maxScroll = categoriesBar.scrollWidth - categoriesBar.clientWidth;

    // Show scroll left arrow
    if (scrollLeft > 2) {
      scrollLeftBtn.style.display = 'flex';
    } else {
      scrollLeftBtn.style.display = 'none';
    }

    // Show scroll right arrow
    if (scrollLeft < maxScroll - 2) {
      scrollRightBtn.style.display = 'flex';
    } else {
      scrollRightBtn.style.display = 'none';
    }
  };

  // Scroll listeners
  categoriesBar.addEventListener('scroll', checkScrollArrows);
  window.addEventListener('resize', checkScrollArrows);

  // Left & Right clicks
  scrollLeftBtn.addEventListener('click', () => {
    categoriesBar.scrollBy({ left: -200, behavior: 'smooth' });
  });

  scrollRightBtn.addEventListener('click', () => {
    categoriesBar.scrollBy({ left: 200, behavior: 'smooth' });
  });

  // Quick initial check (delayed to ensure layout renders)
  setTimeout(checkScrollArrows, 300);
}

// 3. Profile Dropdown Toggle
function setupProfileDropdown() {
  const profileBtn = profileContainer.querySelector('.profile-avatar-btn');
  
  profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle('active');
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (!profileContainer.contains(e.target)) {
      profileDropdown.classList.remove('active');
    }
  });
}

// 4. Search Filter Logic
function setupSearch() {
  // Check text typing to show clear button
  searchInput.addEventListener('input', () => {
    if (searchInput.value.trim().length > 0) {
      clearSearchBtn.style.display = 'flex';
    } else {
      clearSearchBtn.style.display = 'none';
    }
  });

  // Clear button click
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = "";
    clearSearchBtn.style.display = 'none';
    searchQuery = "";
    searchInput.focus();
    loadVideosWithSkeleton();
  });

  // Form submit (Trigger filtering)
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = searchInput.value.trim().toLowerCase();
    loadVideosWithSkeleton();
  });
}

// 5. Skeleton Loading Simulator & Video Grid population
function loadVideosWithSkeleton() {
  // Show Skeleton Screen Grid
  videosGrid.style.display = 'none';
  skeletonGrid.style.display = 'grid';
  renderSkeletons();

  // Simulate API delay
  setTimeout(() => {
    // Filter videos by current category and search query
    const filteredVideos = videosData.filter(video => {
      const matchCategory = currentCategory === "All" || video.category === currentCategory;
      const matchSearch = video.title.toLowerCase().includes(searchQuery) || 
                          video.channelName.toLowerCase().includes(searchQuery);
      return matchCategory && matchSearch;
    });

    renderVideos(filteredVideos);
    
    // Toggle displays
    skeletonGrid.style.display = 'none';
    videosGrid.style.display = 'grid';
  }, 1200); // 1.2s realistic loading time
}

// Render skeleton items placeholder cards
function renderSkeletons() {
  skeletonGrid.innerHTML = "";
  for (let i = 0; i < 12; i++) {
    const card = document.createElement('div');
    card.className = "skeleton-card";
    card.innerHTML = `
      <div class="skeleton-thumbnail"></div>
      <div style="display: flex; gap: 12px; margin-top: 4px;">
        <div class="skeleton-avatar"></div>
        <div style="flex: 1;">
          <div class="skeleton-line title"></div>
          <div class="skeleton-line channel"></div>
          <div class="skeleton-line meta"></div>
        </div>
      </div>
    `;
    skeletonGrid.appendChild(card);
  }
}

// Render actual video items cards
function renderVideos(videos) {
  videosGrid.innerHTML = "";

  if (videos.length === 0) {
    // Render Beautiful Empty State
    videosGrid.innerHTML = `
      <div class="no-results">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <h2>No videos found</h2>
        <p>Try searching for different keywords or checking another category tag.</p>
      </div>
    `;
    return;
  }

  // Inject video cards with stagger delay styling
  videos.forEach((video, index) => {
    const card = document.createElement('div');
    card.className = "video-card";
    // Inline animation delay to make entrance beautiful
    card.style.animationDelay = `${index * 0.05}s`;

    // Verified badge SVG path
    const verifiedBadgeHTML = video.isVerified ? `
      <svg class="verify-badge" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
      </svg>
    ` : '';

    // Live indicator or normal views metadata
    const metaHTML = video.isLive ? `
      <span class="video-meta" style="color: var(--accent-red); font-weight: 500; display: flex; align-items: center; gap: 4px;">
        <span style="display:inline-block; width: 6px; height: 6px; border-radius:50%; background-color: var(--accent-red);"></span>
        LIVE
      </span>
    ` : `
      <span class="video-meta">${video.views} &bull; ${video.uploadTime}</span>
    `;

    // Fallback renders for avatar and thumbnail to support robust loading states
    const thumbnailHTML = video.thumbnailUrl ? `
      <img class="thumbnail-image" src="${video.thumbnailUrl}" alt="${video.title}" loading="lazy">
    ` : `
      <div class="thumbnail-image ${video.gradientClass}"></div>
    `;

    const avatarHTML = video.avatarUrl ? `
      <img class="channel-avatar" src="${video.avatarUrl}" alt="${video.channelName}" loading="lazy">
    ` : `
      <div class="channel-avatar ${video.avatarColorClass}">
        ${video.avatarLetter}
      </div>
    `;

    card.innerHTML = `
      <div class="thumbnail-container">
        ${thumbnailHTML}
        <span class="duration-badge">${video.duration}</span>
        <div class="play-overlay">
          <svg class="play-icon-svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"></path>
          </svg>
        </div>
      </div>
      <div class="video-details">
        ${avatarHTML}
        <div class="video-info">
          <h3 class="video-title" title="${video.title}">${video.title}</h3>
          <div class="channel-name">
            ${video.channelName}
            ${verifiedBadgeHTML}
          </div>
          ${metaHTML}
        </div>
      </div>
    `;

    // Simulating thumbnail interactions (play/pause overlay effects on click)
    card.addEventListener('click', () => {
      alert(`Simulating play action for video:\n"${video.title}"\nby channel: ${video.channelName}`);
    });

    videosGrid.appendChild(card);
  });
}
