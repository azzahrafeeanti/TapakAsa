// kategori  popup
function openPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const options = dropdown.querySelector(".dropdown-options");
  options.style.display = options.style.display === "block" ? "none" : "block";
}

function selectOption(dropdownId, value) {
  const dropdown = document.getElementById(dropdownId);
  const selected = dropdown.querySelector(".dropdown-selected");
  selected.textContent = value;
  const options = dropdown.querySelector(".dropdown-options");
  options.style.display = "none";
}

// Optional: Klik di luar popup untuk menutup
window.addEventListener("click", function (e) {
  const popup = document.getElementById("categoryPopup");
  if (e.target === popup) popup.style.display = "none";
});

// TANGGAL POPUP
// Switch tab logic
function switchTab(tabId) {
  const allTabs = document.querySelectorAll(".tab-section");
  const allButtons = document.querySelectorAll(".tab-button");

  allTabs.forEach((tab) => tab.classList.remove("active"));
  allButtons.forEach((btn) => btn.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  document.querySelector(`[data-tab="${tabId}"]`).classList.add("active");
}

// LOKASI POPUP
// Toggle Event Online/Offline di Popup Lokasi
window.toggleEventLocationMode = function () {
  const isOnline = document.getElementById("toggleOnlineEvent")?.checked;
  if (isOnline === undefined) return;

  const offlineFields = document.getElementById("offlineFields");
  const onlineFields = document.getElementById("onlineFields");
  const eventModeTitle = document.getElementById("eventModeTitle");

  if (offlineFields && onlineFields && eventModeTitle) {
    offlineFields.style.display = isOnline ? "none" : "block";
    onlineFields.style.display = isOnline ? "block" : "none";
    eventModeTitle.innerText = isOnline ? "Online" : "Offline";
  }
};
