document.addEventListener("DOMContentLoaded", function() {
  const tabLists = document.querySelectorAll("menu[role=tablist]");

  tabLists.forEach(tabList => {
    const tabButtons = tabList.querySelectorAll("li button");

    tabButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        e.preventDefault();

        // Update tab states
        tabButtons.forEach(btn => {
          const isActive = btn === e.target;
          btn.setAttribute("aria-selected", isActive);
        });

        openTab(e, tabList);
      });
    });
  });
});

function openTab(event, tabList) {
  const panels = tabList.parentNode.querySelectorAll('[role="tabpanel"]');

  panels.forEach(panel => {
    panel.setAttribute("hidden", ""); // hide all
  });

  const activePanel = tabList.parentNode.querySelector(
    `[role="tabpanel"]#${event.target.getAttribute("aria-controls")}`
  );

  activePanel.removeAttribute("hidden"); // show current
}
