"use client";

import { useEffect } from "react";

/**
 * Ports design_handoff_marketing_site/script.js: scroll progress, sticky nav,
 * mobile drawer, IntersectionObserver reveals, count-up, compliance-bar fill,
 * hero word-stagger, comparison highlight positioning, smooth scroll.
 *
 * Runs once after hydration against the server-rendered DOM. Renders nothing.
 */
export function SiteInteractions() {
  useEffect(() => {
    const progressBar =
      document.querySelector<HTMLElement>(".scroll-progress");
    const nav = document.querySelector<HTMLElement>(".nav");

    function onScroll() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      if (progressBar) progressBar.style.width = pct + "%";
      if (nav) {
        if (h.scrollTop > 80) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Mobile drawer
    const burger = document.querySelector<HTMLElement>(".hamburger");
    const drawer = document.querySelector<HTMLElement>(".mobile-drawer");
    const drawerClose = document.querySelector<HTMLElement>(".drawer-close");
    const drawerOverlay = document.querySelector<HTMLElement>(
      ".mobile-drawer-overlay",
    );
    function openDrawer() {
      drawer?.classList.add("open");
      drawerOverlay?.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function closeDrawer() {
      drawer?.classList.remove("open");
      drawerOverlay?.classList.remove("open");
      document.body.style.overflow = "";
    }
    burger?.addEventListener("click", openDrawer);
    drawerClose?.addEventListener("click", closeDrawer);
    drawerOverlay?.addEventListener("click", closeDrawer);

    // Count up
    function startCount(el: Element) {
      const target = el.querySelector<HTMLElement>(".stat-val");
      if (!target) return;
      const raw = target.getAttribute("data-target");
      if (!raw) return;
      const prefix = target.getAttribute("data-prefix") || "";
      const suffix = target.getAttribute("data-suffix") || "";
      const val = parseFloat(raw);
      const duration = 1200;
      const start = performance.now();
      function step(now: number) {
        const t = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        const v = val * eased;
        const str = Number.isInteger(val)
          ? Math.round(v).toString()
          : v.toFixed(1);
        target!.textContent = prefix + str + suffix;
        if (t < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }

    // Intersection observer for reveal animations
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            if (e.target.classList.contains("stat")) startCount(e.target);
            const fill = e.target.querySelector<HTMLElement>(
              ".compliance-bar .fill",
            );
            if (fill) {
              const v = fill.getAttribute("data-fill");
              setTimeout(() => (fill.style.width = v + "%"), 200);
            }
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    document
      .querySelectorAll(
        ".reveal, .reveal-left, .reveal-clip, .stagger, .stat, .pain-grid, .comp-table, .mock-compliance",
      )
      .forEach((el) => io.observe(el));

    // Hero word stagger
    document.querySelectorAll<HTMLElement>(".word-stagger").forEach((el, blockIdx) => {
      const text = el.dataset.text || el.textContent || "";
      el.textContent = "";
      const words = text.split(" ");
      words.forEach((w, i) => {
        const s = document.createElement("span");
        s.innerHTML = w + (i < words.length - 1 ? "&nbsp;" : "");
        s.style.animationDelay =
          (blockIdx * words.length + i) * 80 + "ms";
        el.appendChild(s);
      });
    });

    // Smooth scroll for in-page anchors
    const anchorHandlers: Array<{
      el: HTMLAnchorElement;
      fn: (e: Event) => void;
    }> = [];
    document
      .querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      .forEach((a) => {
        const fn = (e: Event) => {
          const id = a.getAttribute("href") || "";
          if (id.length < 2) return;
          const t = document.querySelector(id);
          if (t) {
            e.preventDefault();
            t.scrollIntoView({ behavior: "smooth", block: "start" });
            closeDrawer();
          }
        };
        a.addEventListener("click", fn);
        anchorHandlers.push({ el: a, fn });
      });

    // Zymiq column highlight position
    function positionZymiqHighlight() {
      const table = document.querySelector<HTMLElement>(".comp-table");
      if (!table) return;
      const zCell = table.querySelector<HTMLElement>("th.zymiq-col");
      const highlight =
        table.querySelector<HTMLElement>(".zymiq-highlight");
      if (!zCell || !highlight) return;
      const rect = zCell.getBoundingClientRect();
      const parentRect = table.getBoundingClientRect();
      highlight.style.left = rect.left - parentRect.left + "px";
      highlight.style.width = rect.width + "px";
    }
    window.addEventListener("resize", positionZymiqHighlight);
    positionZymiqHighlight();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", positionZymiqHighlight);
      burger?.removeEventListener("click", openDrawer);
      drawerClose?.removeEventListener("click", closeDrawer);
      drawerOverlay?.removeEventListener("click", closeDrawer);
      anchorHandlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
      io.disconnect();
    };
  }, []);

  return null;
}
