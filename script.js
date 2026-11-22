document.addEventListener("DOMContentLoaded", () => {
  // 1. Photo Gallery Toggle
  const togglePhotosBtn = document.getElementById("togglePhotosBtn");
  const photoGalleryContainer = document.getElementById("photoGalleryContainer");

  if (togglePhotosBtn && photoGalleryContainer) {
    togglePhotosBtn.addEventListener("click", () => {
      const isHidden = photoGalleryContainer.classList.toggle("hidden");
      togglePhotosBtn.textContent = isHidden ? "Show Project Photos" : "Hide Project Photos";
    });
  }

  // 2. Weekly Summaries Data (Weeks 1–6)
  const weeklyData = [
    {
      week: "1",
      title: "Week 1: Community Survey & Baseline Assessment",
      summary: "Conducted an initial survey in Rebala habitation to understand existing home gardening habits, soil types, water availability, and awareness of organic horticulture.",
      outcome: "Identified key knowledge gaps in soil health testing and chemical-free cultivation among local households."
    },
    {
      week: "2",
      title: "Week 2: Soil Preparation & Organic Composting Workshops",
      summary: "Demonstrated natural soil enrichment techniques using cow dung, vermicompost, and kitchen/plant waste composting to improve soil fertility.",
      outcome: "Residents learned how to prepare low-cost organic manure and reduce dependency on synthetic fertilizers."
    },
    {
      week: "3",
      title: "Week 3: Seed Selection & Kitchen Garden Setup",
      summary: "Distributed quality seeds and saplings for brinjal, chilli, bitter gourd, ridge gourd, and marigold; assisted families in setting up backyard and terrace beds.",
      outcome: "Established sustainable household kitchen gardens promoting daily nutritional security."
    },
    {
      week: "4",
      title: "Week 4: Natural Pest Management (IPM) & Irrigation",
      summary: "Introduced Integrated Pest Management (IPM) practices using neem oil sprays, pheromone traps, and drip/mulching techniques for water conservation.",
      outcome: "Farmers and gardeners adopted eco-friendly pest control against fruit flies, late blight, and powdery mildew."
    },
    {
      week: "5",
      title: "Week 5: Field Visits to Orchards & Floriculture Farms",
      summary: "Visited local mango, star fruit, jasmine, and marigold farms in Rebala to document crop maintenance, pruning, and harvesting cycles.",
      outcome: "Gained practical exposure to pomology and floriculture challenges, including post-harvest handling."
    },
    {
      week: "6",
      title: "Week 6: Post-Harvest Value Addition, FSSAI & Digital Portal",
      summary: "Educated farmers on food safety standards (FSSAI), value-added products (jams, squashes, pickles), and launched the HortiCare web resource.",
      outcome: "Empowered rural growers with digital access to government horticulture schemes and direct marketing insights."
    }
  ];

  const weekSelector = document.getElementById("weekSelector");
  const weekSearch = document.getElementById("weekSearch");
  const resetWeekBtn = document.getElementById("resetWeekBtn");
  const weekOutput = document.getElementById("weekOutput");

  function renderWeeks() {
    if (!weekOutput) return;
    const selectedWeek = weekSelector ? weekSelector.value : "all";
    const query = weekSearch ? weekSearch.value.toLowerCase().trim() : "";

    const filtered = weeklyData.filter(item => {
      const matchesWeek = selectedWeek === "all" || item.week === selectedWeek;
      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.outcome.toLowerCase().includes(query);
      return matchesWeek && matchesSearch;
    });

    if (filtered.length === 0) {
      weekOutput.innerHTML = <p>No matching weekly summaries found. Try clearing the search filter.</p>;
      return;
    }
    weekOutput.innerHTML = filtered
      .map(
        item => 
        <div style="margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e0e0e0;">
          <h4 style="margin-bottom: 0.3rem; color: #1b5e20;">${item.title}</h4>
          <p style="margin: 0.25rem 0;"><strong>Activities:</strong> ${item.summary}</p>
          <p style="margin: 0.25rem 0;"><strong>Learning Outcome:</strong> ${item.outcome}</p>
        </div>
      
      )
      .join("");
  }

  if (weekSelector) weekSelector.addEventListener("change", renderWeeks);
  if (weekSearch) weekSearch.addEventListener("input", renderWeeks);
  if (resetWeekBtn) {
    resetWeekBtn.addEventListener("click", () => {
      if (weekSelector) weekSelector.value = "all";
      if (weekSearch) weekSearch.value = "";
      renderWeeks();
    });
  }

  // 3. Outcomes, Problems & Action Plans Data
  const outcomeData = [
    {
      category: "outcomes",
      title: "Major Outcomes of Horticulture (9 Core Impact Areas)",
      points: [
        "1. Improved Household Nutrition & Dietary Diversity through fresh organic vegetables and fruits.",
        "2. Environmental Sustainability via reduced chemical pesticide runoff and increased green cover.",
        "3. Soil Health Restoration using organic composting and vermicomposting practices.",
        "4. Water Conservation through mulching and efficient irrigation scheduling.",
        "5. Rural Livelihood & Women Empowerment via floriculture (jasmine, marigold) and kitchen surplus sales.",
        "6. Reduced Household Food Expenditure on daily vegetables.",
        "7. Biodiversity Conservation by encouraging native flowering and fruit-bearing species.",
        "8. Community Beautification of vacant plots and public spaces in Rebala.",
        "9. Digital & Technical Awareness through the HortiCare web platform."
      ]
    },
    {
      category: "problems",
      title: "Problems Identified in the Community",
      points: [
        "Lack of regular soil testing and over-reliance on traditional, low-yield seed varieties.",
        "Crop losses from fungal and bacterial infections (tomato late blight, powdery mildew) and fruit flies.",
        "Absence of local cold storage and food processing facilities causing post-harvest spoilage.",
        "Exploitation by middlemen and commission agents reducing net profit for small-scale farmers.",
        "Limited awareness of government horticulture subsidies and FSSAI value-addition guidelines."
      ]
    },
    {
      category: "shortTerm",
      title: "Short-Term Action Plan (0–6 Months)",
      points: [
        "Establish household kitchen gardens and distribute organic composting starter guides.",
        "Conduct hands-on demonstrations on preparing neem-based organic bio-pesticides (IPM).",
        "Connect local farmers with Mandal Horticulture Officers for subsidized seedlings and soil health cards.",
        "Maintain the HortiCare digital portal with updated seasonal crop advisories."
      ]
    },
    {
      category: "longTerm",
      title: "Long-Term Action Plan (6–24 Months)",
      points: [
        "Form village-level Farmer Producer Organizations (FPOs) for collective bargaining and direct market access.",
        "Establish community-shared solar drying and small-scale food processing units (jams, squashes, pickles).",
        "Expand drip irrigation and rainwater harvesting infrastructure across Rebala horticulture plots.",
        "Develop school and panchayat herbal/nutritional gardens for sustained youth engagement."
      ]
    },
    {
      category: "awareness",
      title: "Community Awareness Programmes & Outcomes",
      points: [
        "Organized door-to-door campaigns and interactive sessions on organic farming vs. chemical farming.",
        "Trained women self-help groups on terrace gardening, marigold cultivation, and post-harvest sorting.",
        "Outcome: Over 35 households initiated home gardening and adopted natural pest control methods."
      ]
    }
  ];
  const outcomeCategory = document.getElementById("outcomeCategory");
  const outcomeSearch = document.getElementById("outcomeSearch");
  const resetOutcomeBtn = document.getElementById("resetOutcomeBtn");
  const outcomeOutput = document.getElementById("outcomeOutput");

  function renderOutcomes() {
    if (!outcomeOutput) return;
    const selectedCat = outcomeCategory ? outcomeCategory.value : "all";
    const query = outcomeSearch ? outcomeSearch.value.toLowerCase().trim() : "";

    const filtered = outcomeData
      .filter(item => selectedCat === "all" || item.category === selectedCat)
      .map(item => {
        const matchingPoints = item.points.filter(
          pt => !query || pt.toLowerCase().includes(query) || item.title.toLowerCase().includes(query)
        );
        return { ...item, points: matchingPoints };
      })
      .filter(item => item.points.length > 0);

    if (filtered.length === 0) {
      outcomeOutput.innerHTML = <p>No matching records found. Try another keyword or reset filters.</p>;
      return;
    }

    outcomeOutput.innerHTML = filtered
      .map(
        item => 
        <div style="margin-bottom: 1.25rem; padding-bottom: 0.75rem; border-bottom: 1px solid #e0e0e0;">
          <h4 style="margin-bottom: 0.4rem; color: #1b5e20;">${item.title}</h4>
          <ul class="clean-list">
            ${item.points.map(pt => <li>${pt}</li>).join("")}
          </ul>
        </div>
      
      )
      .join("");
  }

  if (outcomeCategory) outcomeCategory.addEventListener("change", renderOutcomes);
  if (outcomeSearch) outcomeSearch.addEventListener("input", renderOutcomes);
  if (resetOutcomeBtn) {
    resetOutcomeBtn.addEventListener("click", () => {
      if (outcomeCategory) outcomeCategory.value = "all";
      if (outcomeSearch) outcomeSearch.value = "";
      renderOutcomes();
    });
  }

  // Initial render on page load
  renderWeeks();
  renderOutcomes();
});
