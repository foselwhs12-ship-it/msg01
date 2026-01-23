const ADMIN_PASSWORD = "admin123";
const STORAGE_KEY = "lifeBalancePosts";
const ADMIN_KEY = "lifeBalanceAdmin";

const defaultPosts = [
  {
    id: "post-1",
    title: "아침 컨디션을 살리는 작은 루틴",
    summary: "기상 후 15분이 하루의 리듬을 바꾸는 방법을 정리합니다.",
    content:
      "아침의 첫 15분은 몸의 리듬을 설정하는 시간입니다. 물 한 잔, 가벼운 스트레칭, 햇빛 받기만 해도 컨디션이 달라집니다.",
    tags: ["루틴", "컨디션"],
    date: "2024-06-03",
  },
  {
    id: "post-2",
    title: "주간 회복 점검표 만들기",
    summary: "주말에 간단히 체크하는 회복 질문 리스트를 소개합니다.",
    content:
      "피로가 누적되기 전에 회복 상태를 점검하는 것이 중요합니다. 스스로에게 질문하고 답을 기록해보세요.",
    tags: ["회복", "기록"],
    date: "2024-06-10",
  },
  {
    id: "post-3",
    title: "마음이 지칠 때 쉬는 기술",
    summary: "짧은 숨 고르기만으로도 마음을 안정시키는 방법을 공유합니다.",
    content:
      "마음이 복잡할수록 짧은 호흡을 의식적으로 늘려보세요. 4초 들숨, 6초 날숨을 5회 반복합니다.",
    tags: ["휴식", "마음관리"],
    date: "2024-06-18",
  },
];

const storage = {
  loadPosts() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (error) {
        console.error("Failed to parse posts", error);
      }
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosts));
    return defaultPosts;
  },
  savePosts(posts) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  },
  isAdmin() {
    return localStorage.getItem(ADMIN_KEY) === "true";
  },
  setAdmin(value) {
    localStorage.setItem(ADMIN_KEY, value ? "true" : "false");
  },
};

const dom = {
  homePosts: document.getElementById("home-posts"),
  blogPosts: document.getElementById("blog-posts"),
  relatedPosts: document.getElementById("related-posts"),
  adminPanel: document.getElementById("admin-panel"),
  adminLoginBtn: document.getElementById("admin-login-btn"),
  adminLogoutBtn: document.getElementById("admin-logout-btn"),
  postForm: document.getElementById("post-form"),
  postTitle: document.getElementById("post-title"),
  postSummary: document.getElementById("post-summary"),
  postContent: document.getElementById("post-content"),
  postTags: document.getElementById("post-tags"),
  postDetail: document.getElementById("post-detail"),
};

const ui = {
  renderCards(target, posts, options = {}) {
    if (!target) return;
    target.innerHTML = "";
    const max = options.limit || posts.length;
    posts.slice(0, max).forEach((post) => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <div class="meta">
          <span>${post.date}</span>
          <span>${post.tags?.join(", ") || ""}</span>
        </div>
        <h3>${post.title}</h3>
        <p>${post.summary}</p>
        <a class="link" href="post.html?id=${post.id}">자세히 보기 →</a>
      `;
      if (options.withDelete) {
        const button = document.createElement("button");
        button.className = "btn subtle";
        button.textContent = "삭제";
        button.type = "button";
        button.addEventListener("click", () => {
          options.onDelete?.(post.id);
        });
        card.appendChild(button);
      }
      target.appendChild(card);
    });
  },
  toggleAdmin(isAdmin) {
    if (dom.adminPanel) {
      dom.adminPanel.classList.toggle("active", isAdmin);
      dom.adminPanel.setAttribute("aria-hidden", (!isAdmin).toString());
    }
    if (dom.adminLoginBtn) {
      dom.adminLoginBtn.textContent = isAdmin ? "관리자 모드" : "관리자 로그인";
    }
  },
};

function initHome(posts) {
  if (!dom.homePosts) return;
  ui.renderCards(dom.homePosts, posts, { limit: 3 });
}

function initBlog(posts) {
  if (!dom.blogPosts) return;
  const render = () => {
    ui.renderCards(dom.blogPosts, posts, {
      withDelete: storage.isAdmin(),
      onDelete: (id) => {
        posts = posts.filter((post) => post.id !== id);
        storage.savePosts(posts);
        render();
      },
    });
    ui.toggleAdmin(storage.isAdmin());
  };

  if (dom.adminLoginBtn) {
    dom.adminLoginBtn.addEventListener("click", () => {
      if (storage.isAdmin()) {
        alert("이미 관리자 모드입니다.");
        return;
      }
      const password = prompt("관리자 비밀번호를 입력하세요.");
      if (password === ADMIN_PASSWORD) {
        storage.setAdmin(true);
        render();
      } else if (password) {
        alert("비밀번호가 올바르지 않습니다.");
      }
    });
  }

  if (dom.adminLogoutBtn) {
    dom.adminLogoutBtn.addEventListener("click", () => {
      storage.setAdmin(false);
      render();
    });
  }

  if (dom.postForm) {
    dom.postForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!storage.isAdmin()) {
        alert("관리자만 등록할 수 있습니다.");
        return;
      }
      const newPost = {
        id: `post-${Date.now()}`,
        title: dom.postTitle.value.trim(),
        summary: dom.postSummary.value.trim(),
        content: dom.postContent.value.trim(),
        tags: dom.postTags.value
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        date: new Date().toISOString().slice(0, 10),
      };
      posts = [newPost, ...posts];
      storage.savePosts(posts);
      dom.postForm.reset();
      render();
    });
  }

  render();
}

function initPostDetail(posts) {
  if (!dom.postDetail) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const post = posts.find((item) => item.id === id) || posts[0];
  if (!post) return;

  const title = document.getElementById("post-title");
  const summary = document.getElementById("post-summary");
  const content = document.getElementById("post-content");
  const date = document.getElementById("post-date");

  if (title) title.textContent = post.title;
  if (summary) summary.textContent = post.summary;
  if (date) date.textContent = post.date;
  if (content) content.textContent = post.content;

  const related = posts.filter((item) => item.id !== post.id).slice(0, 3);
  ui.renderCards(dom.relatedPosts, related);
}

const posts = storage.loadPosts();
initHome(posts);
initBlog(posts);
initPostDetail(posts);
