const chartData = [
  { year: "2019", natural: 4929, interprovincial: 14265, npr: 28980, internationalExNpr: 41879, total: 90053 },
  { year: "2020", natural: 923, interprovincial: 19310, npr: -27142, internationalExNpr: 23987, total: 17078 },
  { year: "2021", natural: -554, interprovincial: 31047, npr: 13505, internationalExNpr: 61561, total: 105559 },
  { year: "2022", natural: -3984, interprovincial: 11325, npr: 88991, internationalExNpr: 48943, total: 145275 },
  { year: "2023", natural: -3480, interprovincial: 718, npr: 114535, internationalExNpr: 56312, total: 168085 },
  { year: "2024", natural: -35, interprovincial: -2137, npr: 53027, internationalExNpr: 48110, total: 98965 },
  { year: "2025", natural: 927, interprovincial: 3175, npr: -80915, internationalExNpr: 35352, total: -41461 }
];

const growthCompositionData = [
  { year: "2019", totalPopulation: 5157053, workingAge: 3345528, seniors: 892077 },
  { year: "2020", totalPopulation: 5180015, workingAge: 3386887, seniors: 926949 },
  { year: "2021", totalPopulation: 5287664, workingAge: 3396903, seniors: 961236 },
  { year: "2022", totalPopulation: 5432939, workingAge: 3447794, seniors: 995568 },
  { year: "2023", totalPopulation: 5601024, workingAge: 3536017, seniors: 1029856 },
  { year: "2024", totalPopulation: 5699989, workingAge: 3667399, seniors: 1064846 },
  { year: "2025", totalPopulation: 5658528, workingAge: 3731489, seniors: 1103217 }
];

const regionalSeriesData = {
  "Vancouver Island/Coast": { 2018: 861440, 2019: 875751, 2020: 887452, 2021: 898851, 2022: 919199, 2023: 931495, 2024: 947216, 2025: 954177 },
  "Mainland/Southwest": { 2018: 3068472, 2019: 3128790, 2020: 3169876, 2021: 3196134, 2022: 3287443, 2023: 3412449, 2024: 3535778, 2025: 3547411 },
  "Thompson/Okanagan": { 2018: 595372, 2019: 607377, 2020: 618056, 2021: 628918, 2022: 644154, 2023: 656271, 2024: 665925, 2025: 669958 },
  Kootenay: { 2018: 161398, 2019: 163900, 2020: 165726, 2021: 167988, 2022: 170906, 2023: 173822, 2024: 176102, 2025: 176982 },
  Cariboo: { 2018: 166097, 2019: 167034, 2020: 167388, 2021: 166940, 2022: 168407, 2023: 170793, 2024: 173230, 2025: 174641 },
  "North Coast": { 2018: 57712, 2019: 57929, 2020: 58215, 2021: 58560, 2022: 58836, 2023: 59616, 2024: 60598, 2025: 61556 },
  Nechako: { 2018: 39862, 2019: 39851, 2020: 39666, 2021: 40008, 2022: 40207, 2023: 40216, 2024: 40243, 2025: 40257 },
  Northeast: { 2018: 70626, 2019: 70390, 2020: 69722, 2021: 69266, 2022: 69693, 2023: 70634, 2024: 72022, 2025: 72554 }
};

const regionalSpaghettiData = {
  years: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
  regions: [
    { name: "Metro Vancouver", growth: [1.95, 1.306, 0.745, 3.023, 4.021, 3.762, 0.171] },
    { name: "Capital", growth: [1.788, 1.533, 1.222, 2.696, 1.486, 2.038, 0.705] },
    { name: "Fraser Valley", growth: [1.959, 1.084, 1.183, 1.723, 2.354, 2.951, 1.8] },
    { name: "Central Okanagan", growth: [2.601, 2.57, 2.634, 3.336, 2.559, 2.263, 1.202] },
    { name: "Nanaimo", growth: [1.905, 1.337, 1.396, 1.981, 1.515, 1.758, 0.929] },
    { name: "Thompson-Nicola", growth: [1.551, 1.031, 0.61, 2.095, 2.02, 1.495, -0.107] },
    { name: "Fraser-Fort George", growth: [0.672, 0.336, -0.686, 1.062, 1.986, 2.044, 1.048] },
    { name: "North Okanagan", growth: [1.647, 1.635, 1.534, 2.223, 1.607, 0.962, 0.644] },
    { name: "Cowichan Valley", growth: [0.983, 0.804, 0.852, 1.641, 0.672, 1.035, 0.688] },
    { name: "Okanagan-Similkameen", growth: [1.591, 1.222, 1.401, 0.887, 0.142, 0.061, 0.33] },
    { name: "Comox Valley", growth: [1.745, 1.379, 1.468, 1.946, 1.79, 1.875, 1.052] },
    { name: "East Kootenay", growth: [2.349, 1.523, 1.783, 1.979, 2.059, 1.383, 0.596] },
    { name: "Central Kootenay", growth: [0.994, 0.941, 0.653, 1.79, 1.989, 1.542, 0.56] },
    { name: "Peace River", growth: [-0.125, -0.78, -0.744, 0.672, 1.479, 2.035, 0.765] },
    { name: "Cariboo", growth: [0.398, 0.02, 0.385, 0.595, 0.534, 0.456, 0.442] },
    { name: "Columbia-Shuswap", growth: [2.252, 1.55, 2.205, 2.402, 1.978, 1.215, 0.363] },
    { name: "Squamish-Lillooet", growth: [3.396, 3.396, 2.259, 2.159, 3.37, 1.462, -0.684] },
    { name: "Strathcona", growth: [1.302, 1.139, 1.272, 2.084, 0.497, 0.809, 0.469] },
    { name: "Kitimat-Stikine", growth: [0.568, 0.747, 0.658, 0.76, 1.948, 2.123, 2.424] },
    { name: "Bulkley-Nechako", growth: [0.028, -0.441, 0.617, 0.361, 0.038, 0.015, 0.01] },
    { name: "Alberni-Clayoquot", growth: [2.051, 1.342, 1.825, 1.661, 0.949, 0.815, 0.487] },
    { name: "Kootenay Boundary", growth: [1.047, 0.637, 1.88, 1.158, 0.468, 0.728, 0.186] },
    { name: "Sunshine Coast", growth: [1.16, 1.044, 1.968, 1.653, 0.807, 1.11, 0.687] },
    { name: "qathet", growth: [1.176, 1.4, 1.665, 1.611, 1.203, 0.614, 0.458] },
    { name: "North Coast", growth: [-0.016, -0.026, 0.458, -0.126, 0.026, 0.635, -0.24] },
    { name: "Mount Waddington", growth: [-0.203, -1.281, 0.752, 1.279, -0.105, -0.07, -0.316] },
    { name: "Northern Rockies (Census Division)", growth: [-3.114, -3.256, 0.604, -0.15, -0.451, 0.971, 0.363] },
    { name: "Central Coast", growth: [0.889, 1.193, 4.913, 2.114, 2.83, 0.815, 0.152] }
  ],
  weightedAvg: [1.793, 1.273, 0.977, 2.529, 2.919, 2.825, 0.466]
};

const labourMonthlyData = [
  { month: "2019-01", unemployedPersons: 138322, vacancies: 101285 },
  { month: "2019-02", unemployedPersons: 127147, vacancies: 93020 },
  { month: "2019-03", unemployedPersons: 137430, vacancies: 105685 },
  { month: "2019-04", unemployedPersons: 136629, vacancies: 113375 },
  { month: "2019-05", unemployedPersons: 133660, vacancies: 106360 },
  { month: "2019-06", unemployedPersons: 127810, vacancies: 103285 },
  { month: "2019-07", unemployedPersons: 136825, vacancies: 112000 },
  { month: "2019-08", unemployedPersons: 159897, vacancies: 101365 },
  { month: "2019-09", unemployedPersons: 131216, vacancies: 104140 },
  { month: "2019-10", unemployedPersons: 131951, vacancies: 97690 },
  { month: "2019-11", unemployedPersons: 142345, vacancies: 90035 },
  { month: "2019-12", unemployedPersons: 124173, vacancies: 80175 },
  { month: "2020-01", unemployedPersons: 138720, vacancies: 95975 },
  { month: "2020-02", unemployedPersons: 150748, vacancies: 95660 },
  { month: "2020-03", unemployedPersons: 223608, vacancies: 90995 },
  { month: "2020-04", unemployedPersons: 308664, vacancies: null },
  { month: "2020-05", unemployedPersons: 367558, vacancies: null },
  { month: "2020-06", unemployedPersons: 346307, vacancies: null },
  { month: "2020-07", unemployedPersons: 312958, vacancies: null },
  { month: "2020-08", unemployedPersons: 334455, vacancies: null },
  { month: "2020-09", unemployedPersons: 229038, vacancies: null },
  { month: "2020-10", unemployedPersons: 219491, vacancies: 105725 },
  { month: "2020-11", unemployedPersons: 215977, vacancies: 91755 },
  { month: "2020-12", unemployedPersons: 198076, vacancies: 79100 },
  { month: "2021-01", unemployedPersons: 227069, vacancies: 82610 },
  { month: "2021-02", unemployedPersons: 212594, vacancies: 107720 },
  { month: "2021-03", unemployedPersons: 215871, vacancies: 110250 },
  { month: "2021-04", unemployedPersons: 202737, vacancies: 108680 },
  { month: "2021-05", unemployedPersons: 206300, vacancies: 125735 },
  { month: "2021-06", unemployedPersons: 185100, vacancies: 136145 },
  { month: "2021-07", unemployedPersons: 194355, vacancies: 138840 },
  { month: "2021-08", unemployedPersons: 219941, vacancies: 160925 },
  { month: "2021-09", unemployedPersons: 160723, vacancies: 170485 },
  { month: "2021-10", unemployedPersons: 147086, vacancies: 152640 },
  { month: "2021-11", unemployedPersons: 152813, vacancies: 139970 },
  { month: "2021-12", unemployedPersons: 136934, vacancies: 151730 },
  { month: "2022-01", unemployedPersons: 151605, vacancies: 145275 },
  { month: "2022-02", unemployedPersons: 140595, vacancies: 130830 },
  { month: "2022-03", unemployedPersons: 153142, vacancies: 173835 },
  { month: "2022-04", unemployedPersons: 143070, vacancies: 168050 },
  { month: "2022-05", unemployedPersons: 132897, vacancies: 166085 },
  { month: "2022-06", unemployedPersons: 133101, vacancies: 177525 },
  { month: "2022-07", unemployedPersons: 144399, vacancies: 159015 },
  { month: "2022-08", unemployedPersons: 157336, vacancies: 151600 },
  { month: "2022-09", unemployedPersons: 113611, vacancies: 158925 },
  { month: "2022-10", unemployedPersons: 121825, vacancies: 141640 },
  { month: "2022-11", unemployedPersons: 122674, vacancies: 135580 },
  { month: "2022-12", unemployedPersons: 109066, vacancies: 112255 },
  { month: "2023-01", unemployedPersons: 142803, vacancies: 127335 },
  { month: "2023-02", unemployedPersons: 156124, vacancies: 111955 },
  { month: "2023-03", unemployedPersons: 140533, vacancies: 129020 },
  { month: "2023-04", unemployedPersons: 150020, vacancies: 132245 },
  { month: "2023-05", unemployedPersons: 154414, vacancies: 125895 },
  { month: "2023-06", unemployedPersons: 163236, vacancies: 131290 },
  { month: "2023-07", unemployedPersons: 181592, vacancies: 128130 },
  { month: "2023-08", unemployedPersons: 181407, vacancies: 111585 },
  { month: "2023-09", unemployedPersons: 148708, vacancies: 111230 },
  { month: "2023-10", unemployedPersons: 143298, vacancies: 120145 },
  { month: "2023-11", unemployedPersons: 154269, vacancies: 103990 },
  { month: "2023-12", unemployedPersons: 154791, vacancies: 86765 },
  { month: "2024-01", unemployedPersons: 174213, vacancies: 109650 },
  { month: "2024-02", unemployedPersons: 158549, vacancies: 93415 },
  { month: "2024-03", unemployedPersons: 174649, vacancies: 94525 },
  { month: "2024-04", unemployedPersons: 155348, vacancies: 111505 },
  { month: "2024-05", unemployedPersons: 177081, vacancies: 103140 },
  { month: "2024-06", unemployedPersons: 161807, vacancies: 105430 },
  { month: "2024-07", unemployedPersons: 186526, vacancies: 106955 },
  { month: "2024-08", unemployedPersons: 203983, vacancies: 93990 },
  { month: "2024-09", unemployedPersons: 171358, vacancies: 98340 },
  { month: "2024-10", unemployedPersons: 166594, vacancies: 94470 },
  { month: "2024-11", unemployedPersons: 168127, vacancies: 91610 },
  { month: "2024-12", unemployedPersons: 163548, vacancies: 66835 },
  { month: "2025-01", unemployedPersons: 198066, vacancies: 83780 },
  { month: "2025-02", unemployedPersons: 184445, vacancies: 72660 },
  { month: "2025-03", unemployedPersons: 193932, vacancies: 84275 },
  { month: "2025-04", unemployedPersons: 191339, vacancies: 91915 },
  { month: "2025-05", unemployedPersons: 212502, vacancies: 87055 },
  { month: "2025-06", unemployedPersons: 176069, vacancies: 84785 },
  { month: "2025-07", unemployedPersons: 198828, vacancies: 88865 },
  { month: "2025-08", unemployedPersons: 228430, vacancies: 77890 },
  { month: "2025-09", unemployedPersons: 189671, vacancies: 83965 },
  { month: "2025-10", unemployedPersons: 196091, vacancies: 80830 },
  { month: "2025-11", unemployedPersons: 187692, vacancies: 69240 },
  { month: "2025-12", unemployedPersons: 177620, vacancies: 65170 }
];

const labourAttachmentData = [
  { group: "Recent immigrants\n(<=10 years)", employedPersons: 334848, unemployedPersons: 30250 },
  { group: "Youth\n(15-24)", employedPersons: 351843, unemployedPersons: 54570 },
  { group: "Core-age workers\n(25-54)", employedPersons: 1986090, unemployedPersons: 110585 },
  { group: "Older workers\n(55+)", employedPersons: 608314, unemployedPersons: 29402 }
];

const replacementDemandLevels = [
  { year: "2019", employed55Plus: 593.6, unemployed55Plus: 26.7, labourForce55Plus: 620.3 },
  { year: "2020", employed55Plus: 570.6, unemployed55Plus: 46.8, labourForce55Plus: 617.4 },
  { year: "2021", employed55Plus: 583.1, unemployed55Plus: 45.0, labourForce55Plus: 628.1 },
  { year: "2022", employed55Plus: 592.2, unemployed55Plus: 24.0, labourForce55Plus: 616.2 },
  { year: "2023", employed55Plus: 599.9, unemployed55Plus: 27.9, labourForce55Plus: 627.8 },
  { year: "2024", employed55Plus: 614.0, unemployed55Plus: 25.0, labourForce55Plus: 639.1 },
  { year: "2025", employed55Plus: 608.3, unemployed55Plus: 29.4, labourForce55Plus: 637.7 }
];

const replacementDemandData = replacementDemandLevels.slice(1).map((curr, index) => {
  const prev = replacementDemandLevels[index];
  return {
    year: curr.year,
    employedGrowth: ((curr.employed55Plus / prev.employed55Plus) - 1) * 100,
    unemployedGrowth: ((curr.unemployed55Plus / prev.unemployed55Plus) - 1) * 100,
    labourForceGrowth: ((curr.labourForce55Plus / prev.labourForce55Plus) - 1) * 100
  };
});

const workbcProgramIndicators = [
  { year: "2019", unemploymentThousands: 135.6, longTermShare: 11.26, youthUnemploymentRate: 9.2, regionalSpread: 0.49 },
  { year: "2020", unemploymentThousands: 253.8, longTermShare: 13.82, youthUnemploymentRate: 18.9, regionalSpread: 1.64 },
  { year: "2021", unemploymentThousands: 188.5, longTermShare: 26.5, youthUnemploymentRate: 12.3, regionalSpread: 0.87 },
  { year: "2022", unemploymentThousands: 135.3, longTermShare: 16.31, youthUnemploymentRate: 8.9, regionalSpread: 0.43 },
  { year: "2023", unemploymentThousands: 155.9, longTermShare: 14.94, youthUnemploymentRate: 9.6, regionalSpread: 1.05 },
  { year: "2024", unemploymentThousands: 171.8, longTermShare: 17.55, youthUnemploymentRate: 11.4, regionalSpread: 0.97 },
  { year: "2025", unemploymentThousands: 194.6, longTermShare: 18.93, youthUnemploymentRate: 13.4, regionalSpread: 0.69 }
];

const leadingIndicators = {
  years: ["2019", "2020", "2021", "2022", "2023", "2024", "2025"],
  interprovMigration: [14265, 19310, 31047, 11325, 718, -2137, 3175],
  nprChange: [28980, -27142, 13505, 88991, 114535, 53027, -80915],
  unemploymentRate: [4.8, 9.1, 6.6, 4.6, 5.2, 5.6, 6.2],
  vacancyRate: [4.31, 4.08, 5.69, 6.12, 4.68, 3.88, 3.24],
  eiProxyUnemploymentThousands: [135.6, 253.8, 188.5, 135.3, 155.9, 171.8, 194.6],
  recentImmigrantEmploymentRate: [71.8, 66.8, 72.0, 75.2, 76.2, 73.4, 73.0]
};

const industryAverageAgeData = [
  { industry: "Agriculture", avgAge: 44.93 },
  { industry: "Finance, insurance, real estate, rental and leasing", avgAge: 43.87 },
  { industry: "Manufacturing", avgAge: 43.85 },
  { industry: "Transportation and warehousing", avgAge: 43.72 },
  { industry: "Business, building and other support services", avgAge: 43.63 },
  { industry: "Educational services", avgAge: 42.84 },
  { industry: "Health care and social assistance", avgAge: 42.78 },
  { industry: "Professional, scientific and technical services", avgAge: 42.64 },
  { industry: "Public administration", avgAge: 42.63 },
  { industry: "Forestry, fishing, mining, quarrying, oil and gas", avgAge: 42.37 },
  { industry: "Other services (except public administration)", avgAge: 41.07 },
  { industry: "Construction", avgAge: 40.98 },
  { industry: "Wholesale and retail trade", avgAge: 39.64 },
  { industry: "Information, culture and recreation", avgAge: 38.81 },
  { industry: "Accommodation and food services", avgAge: 35.66 }
];

const industryGenderGapData = [
  { industry: "Construction", gapPp: 72.61, direction: "Men+", menShare: 86.31, womenShare: 13.69 },
  {
    industry: "Forestry, fishing, mining, quarrying, oil and gas",
    gapPp: 62.23,
    direction: "Men+",
    menShare: 81.12,
    womenShare: 18.88
  },
  { industry: "Transportation and warehousing", gapPp: 56.1, direction: "Men+", menShare: 78.05, womenShare: 21.95 },
  { industry: "Health care and social assistance", gapPp: 53.78, direction: "Women+", menShare: 23.11, womenShare: 76.89 },
  { industry: "Utilities", gapPp: 49.32, direction: "Men+", menShare: 74.66, womenShare: 25.34 },
  { industry: "Manufacturing", gapPp: 46.04, direction: "Men+", menShare: 73.02, womenShare: 26.98 },
  { industry: "Educational services", gapPp: 35.16, direction: "Women+", menShare: 32.42, womenShare: 67.58 },
  { industry: "Agriculture", gapPp: 18.18, direction: "Men+", menShare: 59.09, womenShare: 40.91 },
  {
    industry: "Business, building and other support services",
    gapPp: 16.87,
    direction: "Men+",
    menShare: 58.43,
    womenShare: 41.57
  },
  {
    industry: "Professional, scientific and technical services",
    gapPp: 14.24,
    direction: "Men+",
    menShare: 57.12,
    womenShare: 42.88
  },
  { industry: "Accommodation and food services", gapPp: 13.0, direction: "Women+", menShare: 43.5, womenShare: 56.5 },
  { industry: "Wholesale and retail trade", gapPp: 9.16, direction: "Men+", menShare: 54.58, womenShare: 45.42 },
  {
    industry: "Other services (except public administration)",
    gapPp: 7.67,
    direction: "Women+",
    menShare: 46.17,
    womenShare: 53.83
  },
  {
    industry: "Finance, insurance, real estate, rental and leasing",
    gapPp: 7.19,
    direction: "Women+",
    menShare: 46.4,
    womenShare: 53.6
  },
  { industry: "Information, culture and recreation", gapPp: 3.85, direction: "Men+", menShare: 51.92, womenShare: 48.08 },
  { industry: "Public administration", gapPp: 1.68, direction: "Men+", menShare: 50.84, womenShare: 49.16 }
];

const driverEl = document.getElementById("chart-population-driver");
const driverChart = echarts.init(driverEl);

const years = chartData.map((d) => d.year);
const natural = chartData.map((d) => d.natural);
const interprov = chartData.map((d) => d.interprovincial);
const npr = chartData.map((d) => d.npr);
const internationalExNpr = chartData.map((d) => d.internationalExNpr);
const total = chartData.map((d) => d.total);

const driverOption = {
  grid: { left: 70, right: 34, top: 70, bottom: 72 },
  legend: {
    top: 18,
    itemGap: 16,
    textStyle: { fontFamily: "Public Sans", color: "#344053" },
    data: [
      "Natural increase",
      "Interprovincial migration",
      "International migration (excl. NPR)",
      "Net NPR change",
      "Total population change"
    ]
  },
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "shadow" },
    valueFormatter: (value) => `${value.toLocaleString()} persons`
  },
  xAxis: {
    type: "category",
    data: years,
    axisLine: { lineStyle: { color: "#9da8b5" } },
    axisLabel: { color: "#344053", fontFamily: "Inter" }
  },
  yAxis: {
    type: "value",
    name: "Number of persons",
    nameLocation: "middle",
    nameGap: 55,
    axisLabel: {
      color: "#344053",
      fontFamily: "Inter",
      formatter: (value) => `${Math.round(value / 1000)}k`
    },
    splitLine: { lineStyle: { color: "#e8edf2" } }
  },
  series: [
    {
      name: "Natural increase",
      type: "bar",
      stack: "growth",
      data: natural,
      itemStyle: { color: "#9ca3af" },
      emphasis: { focus: "series" }
    },
    {
      name: "Interprovincial migration",
      type: "bar",
      stack: "growth",
      data: interprov,
      itemStyle: { color: "#649ee5" },
      emphasis: { focus: "series" }
    },
    {
      name: "International migration (excl. NPR)",
      type: "bar",
      stack: "growth",
      data: internationalExNpr,
      itemStyle: { color: "#003366" },
      emphasis: { focus: "series" }
    },
    {
      name: "Net NPR change",
      type: "bar",
      stack: "growth",
      data: npr,
      itemStyle: { color: "#0b5f64" },
      emphasis: { focus: "series" }
    },
    {
      name: "Total population change",
      type: "line",
      data: total,
      symbol: "circle",
      symbolSize: 7,
      smooth: false,
      itemStyle: { color: "#111111" },
      lineStyle: { color: "#111111", width: 1.5 },
      z: 10,
      markArea: {
        silent: true,
        itemStyle: { color: "rgba(96, 165, 250, 0.08)" },
        label: { color: "#1f2937", fontWeight: 600, fontFamily: "Public Sans" },
        data: [
          [{ name: "2019 baseline", xAxis: "2019" }, { xAxis: "2019" }],
          [{ name: "2020-2021 pandemic disruption", xAxis: "2020" }, { xAxis: "2021" }],
          [{ name: "2022-2025 post-pandemic rebound", xAxis: "2022" }, { xAxis: "2025" }]
        ]
      }
    }
  ]
};

driverChart.setOption(driverOption);

const indexedValue = (value, base) => (value / base) * 100;
const compYears = growthCompositionData.map((d) => d.year);
const base = growthCompositionData[0];
const totalIndexed = growthCompositionData.map((d) => +indexedValue(d.totalPopulation, base.totalPopulation).toFixed(1));
const workingIndexed = growthCompositionData.map((d) => +indexedValue(d.workingAge, base.workingAge).toFixed(1));
const seniorsIndexed = growthCompositionData.map((d) => +indexedValue(d.seniors, base.seniors).toFixed(1));

const compositionEl = document.getElementById("chart-growth-composition");
const compositionChart = echarts.init(compositionEl);
const compositionOption = {
  grid: { left: 70, right: 34, top: 58, bottom: 62 },
  legend: {
    top: 16,
    itemGap: 20,
    textStyle: { fontFamily: "Public Sans", color: "#344053" },
    data: ["Total population", "Working-age population (15-64)", "Seniors (65+)"]
  },
  tooltip: {
    trigger: "axis",
    formatter: (params) => {
      const lines = params.map((p) => `${p.marker} ${p.seriesName}: ${p.value}`);
      return [`${params[0].axisValue} (Index, 2019=100)`, ...lines].join("<br/>");
    }
  },
  xAxis: {
    type: "category",
    data: compYears,
    axisLine: { lineStyle: { color: "#9da8b5" } },
    axisLabel: { color: "#344053", fontFamily: "Inter" }
  },
  yAxis: {
    type: "value",
    min: 98,
    max: 126,
    name: "Index (2019 = 100)",
    nameLocation: "middle",
    nameGap: 50,
    axisLabel: { color: "#344053", fontFamily: "Inter" },
    splitLine: { lineStyle: { color: "#e8edf2" } }
  },
  series: [
    {
      name: "Total population",
      type: "line",
      data: totalIndexed,
      smooth: true,
      symbolSize: 6,
      lineStyle: { width: 2, color: "#003366" },
      itemStyle: { color: "#003366" }
    },
    {
      name: "Working-age population (15-64)",
      type: "line",
      data: workingIndexed,
      smooth: true,
      symbolSize: 6,
      lineStyle: { width: 2, color: "#649ee5" },
      itemStyle: { color: "#649ee5" }
    },
    {
      name: "Seniors (65+)",
      type: "line",
      data: seniorsIndexed,
      smooth: true,
      symbolSize: 6,
      lineStyle: { width: 2, color: "#0b5f64" },
      itemStyle: { color: "#0b5f64" }
    }
  ]
};

compositionChart.setOption(compositionOption);

const regionalEl = document.getElementById("chart-regional-growth");
const regionalChart = echarts.init(regionalEl);
const regionalYearRadios = document.querySelectorAll('input[name="regional-year"]');

const buildRegionalDataForYear = (year) => {
  const prevYear = year - 1;
  const rows = Object.entries(regionalSeriesData).map(([region, series]) => {
    const pop = series[year];
    const prev = series[prevYear];
    const yoyGrowth = ((pop / prev) - 1) * 100;
    return { region, population: pop, growthPct: yoyGrowth };
  });
  rows.sort((a, b) => b.population - a.population);
  return rows;
};

const regionalOption = {
  grid: { left: 90, right: 80, top: 46, bottom: 88 },
  legend: {
    top: 10,
    textStyle: { fontFamily: "Public Sans", color: "#344053" },
    data: ["Population (2025)", "Growth (2019-2025)"]
  },
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" }
  },
  xAxis: {
    type: "category",
    data: Object.keys(regionalSeriesData),
    axisLabel: {
      interval: 0,
      rotate: 16,
      color: "#344053",
      fontFamily: "Inter",
      fontSize: 11
    },
    axisLine: { lineStyle: { color: "#9da8b5" } }
  },
  yAxis: [
    {
      type: "value",
      name: "Population (persons)",
      nameLocation: "middle",
      nameGap: 62,
      axisLabel: {
        color: "#344053",
        fontFamily: "Inter",
        formatter: (value) => `${Math.round(value / 1000)}k`
      },
      splitLine: { lineStyle: { color: "#e8edf2" } }
    },
    {
      type: "value",
      name: "Growth (%)",
      nameLocation: "middle",
      nameGap: 54,
      position: "right",
      axisLabel: {
        color: "#344053",
        fontFamily: "Inter",
        formatter: (value) => `${value}%`
      },
      splitLine: { show: false }
    }
  ],
  series: [
    {
      name: "Population (2025)",
      type: "bar",
      yAxisIndex: 0,
      data: [],
      barWidth: 34,
      itemStyle: {
        color: "#649ee5",
        borderRadius: [4, 4, 0, 0]
      },
      label: {
        show: true,
        position: "top",
        color: "#1f2937",
        fontFamily: "Inter",
        fontSize: 10,
        formatter: ({ value }) => `${Math.round(value / 1000)}k`
      }
    },
    {
      name: "Growth (YoY)",
      type: "line",
      yAxisIndex: 1,
      data: [],
      symbol: "circle",
      symbolSize: 7,
      lineStyle: { color: "#003366", width: 2 },
      itemStyle: { color: "#003366" }
    }
  ]
};
regionalChart.setOption(regionalOption);

const spaghettiEl = document.getElementById("chart-regional-spaghetti");
const spaghettiChart = echarts.init(spaghettiEl);
const spaghettiSeries = regionalSpaghettiData.regions.map((r) => ({
  name: r.name,
  type: "line",
  data: r.growth,
  smooth: true,
  symbol: "none",
  triggerLineEvent: true,
  lineStyle: { width: 1.4, color: "#9ec5f3" },
  emphasis: { focus: "series", lineStyle: { width: 2, color: "#649ee5" } }
}));
spaghettiSeries.push({
  name: "Weighted average (all regions)",
  type: "line",
  data: regionalSpaghettiData.weightedAvg,
  smooth: true,
  symbol: "circle",
  symbolSize: 6,
  triggerLineEvent: true,
  lineStyle: { width: 4, color: "#003366" },
  itemStyle: { color: "#003366" },
  z: 10
});

const spaghettiWeightedSeriesName = "Weighted average (all regions)";
let selectedSpaghettiLegendName = null;

const getSpaghettiLegendData = () => {
  if (!selectedSpaghettiLegendName || selectedSpaghettiLegendName === spaghettiWeightedSeriesName) {
    return [spaghettiWeightedSeriesName];
  }
  return [spaghettiWeightedSeriesName, selectedSpaghettiLegendName];
};

const spaghettiLegendFormatter = (name) => {
  if (name === spaghettiWeightedSeriesName) return `{normal|${name}}`;
  if (name === selectedSpaghettiLegendName) return `{active|Selected region: ${name}}`;
  return `{normal|${name}}`;
};

const spaghettiOption = {
  grid: { left: 72, right: 42, top: 108, bottom: 62 },
  legend: {
    type: "plain",
    orient: "horizontal",
    left: 72,
    right: 42,
    top: 16,
    itemGap: 20,
    selectedMode: false,
    formatter: spaghettiLegendFormatter,
    textStyle: {
      fontFamily: "Public Sans",
      rich: {
        active: { color: "#1f2937", fontWeight: 700 },
        normal: { color: "#344053", fontWeight: 400 }
      }
    },
    data: getSpaghettiLegendData()
  },
  tooltip: {
    show: false
  },
  xAxis: {
    type: "category",
    data: regionalSpaghettiData.years,
    axisLine: { lineStyle: { color: "#9da8b5" } },
    axisLabel: { color: "#344053", fontFamily: "Inter" }
  },
  yAxis: {
    type: "value",
    name: "Population growth rate (%)",
    nameLocation: "middle",
    nameGap: 56,
    axisLabel: { color: "#344053", fontFamily: "Inter", formatter: (v) => `${v}%` },
    splitLine: { lineStyle: { color: "#e8edf2" } }
  },
  series: spaghettiSeries
};
spaghettiChart.setOption(spaghettiOption);

const updateSpaghettiLegendSelection = () => {
  spaghettiChart.setOption({
    legend: {
      data: getSpaghettiLegendData(),
      formatter: spaghettiLegendFormatter
    }
  });
};

spaghettiChart.on("click", (params) => {
  if (!params || params.componentType !== "series") return;
  selectedSpaghettiLegendName = params.seriesName;
  updateSpaghettiLegendSelection();
});

const updateRegionalChart = (year) => {
  const rows = buildRegionalDataForYear(year);
  regionalChart.setOption({
    xAxis: {
      data: rows.map((d) => d.region)
    },
    legend: {
      data: [`Population (${year})`, `Growth (${year - 1}-${year})`]
    },
    series: [
      {
        name: `Population (${year})`,
        data: rows.map((d) => d.population)
      },
      {
        name: `Growth (${year - 1}-${year})`,
        data: rows.map((d) => +d.growthPct.toFixed(2))
      }
    ]
  });
};

updateRegionalChart(2025);
if (regionalYearRadios.length > 0) {
  regionalYearRadios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      if (e.target.checked) {
        updateRegionalChart(Number(e.target.value));
      }
    });
  });
}

const labourEl = document.getElementById("chart-labour-tightness");
const labourChart = echarts.init(labourEl);

const labourOption = {
  grid: { left: 72, right: 72, top: 70, bottom: 70 },
  legend: {
    top: 16,
    textStyle: { fontFamily: "Public Sans", color: "#344053" },
    data: ["Unemployed persons", "Vacant jobs", "Vacancy-to-unemployment ratio"],
    selected: { "Vacancy-to-unemployment ratio": false }
  },
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "line" },
    formatter: (params) => {
      const month = params[0]?.axisValue;
      const row = labourMonthlyData.find((d) => d.month === month);
      if (!row) return month;
      const markerByName = Object.fromEntries(params.map((p) => [p.seriesName, p.marker]));
      const ratio =
        row.unemployedPersons != null && row.vacancies != null && row.unemployedPersons > 0
          ? row.vacancies / row.unemployedPersons
          : null;
      return [
        month,
        `${markerByName["Unemployed persons"] || ""} Unemployed persons: ${row.unemployedPersons == null ? "N/A" : row.unemployedPersons.toLocaleString()}`,
        `${markerByName["Vacant jobs"] || ""} Vacant jobs: ${row.vacancies == null ? "N/A" : row.vacancies.toLocaleString()}`,
        `${markerByName["Vacancy-to-unemployment ratio"] || ""} Vacancy-to-unemployment ratio: ${ratio == null ? "N/A" : ratio.toFixed(2)}`
      ].join("<br/>");
    }
  },
  xAxis: {
    type: "category",
    data: labourMonthlyData.map((d) => d.month),
    axisLine: { lineStyle: { color: "#9da8b5" } },
    axisLabel: {
      color: "#344053",
      fontFamily: "Inter",
      interval: 5,
      formatter: (value) => value
    }
  },
  yAxis: [
    {
      type: "value",
      name: "Persons / jobs",
      nameLocation: "middle",
      nameGap: 54,
      axisLabel: { color: "#344053", fontFamily: "Inter", formatter: (v) => `${Math.round(v / 1000)}k` },
      splitLine: { lineStyle: { color: "#e8edf2" } }
    },
    {
      type: "value",
      name: "V/U ratio",
      nameLocation: "middle",
      nameGap: 46,
      position: "right",
      axisLabel: { color: "#344053", fontFamily: "Inter", formatter: (v) => v.toFixed(2) },
      splitLine: { show: false }
    }
  ],
  series: [
    {
      name: "Unemployed persons",
      type: "line",
      yAxisIndex: 0,
      smooth: true,
      symbol: "circle",
      symbolSize: 4,
      connectNulls: false,
      data: labourMonthlyData.map((d) => d.unemployedPersons),
      lineStyle: { color: "#003366", width: 2.2 },
      itemStyle: { color: "#003366" },
      markPoint: {
        symbol: "pin",
        symbolSize: 38,
        data: [{ name: "Peak unemployed", coord: ["2020-05", 367558], value: "Peak" }],
        label: { color: "#ffffff", fontSize: 9, fontWeight: 700 }
      }
    },
    {
      name: "Vacant jobs",
      type: "line",
      yAxisIndex: 0,
      smooth: true,
      symbol: "triangle",
      symbolSize: 4,
      connectNulls: false,
      data: labourMonthlyData.map((d) => d.vacancies),
      lineStyle: { color: "#649ee5", width: 2, type: "dashed" },
      itemStyle: { color: "#649ee5" },
      markPoint: {
        symbol: "pin",
        symbolSize: 34,
        data: [{ name: "Peak vacancies", coord: ["2022-06", 177525], value: "Peak" }],
        label: { color: "#ffffff", fontSize: 9, fontWeight: 700 }
      }
    },
    {
      name: "Vacancy-to-unemployment ratio",
      type: "line",
      yAxisIndex: 1,
      smooth: true,
      symbol: "none",
      connectNulls: false,
      data: labourMonthlyData.map((d) =>
        d.unemployedPersons != null && d.vacancies != null && d.unemployedPersons > 0 ? d.vacancies / d.unemployedPersons : null
      ),
      lineStyle: { color: "#fbbf24", width: 2 },
      itemStyle: { color: "#fbbf24" }
    }
  ]
};
labourChart.setOption(labourOption);

const attachmentEl = document.getElementById("chart-labour-attachment");
const attachmentChart = echarts.init(attachmentEl);
const attachmentOption = {
  grid: { left: 72, right: 34, top: 56, bottom: 74 },
  legend: {
    top: 14,
    textStyle: { fontFamily: "Public Sans", color: "#344053" },
    data: ["Employed persons", "Unemployed persons"]
  },
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "shadow" },
    formatter: (params) => {
      const group = params[0]?.axisValueLabel || "";
      const lines = params.map((p) => `${p.marker} ${p.seriesName}: ${Math.round(p.value).toLocaleString()}`);
      return [group.replace("\n", " "), ...lines].join("<br/>");
    }
  },
  xAxis: {
    type: "category",
    data: labourAttachmentData.map((d) => d.group),
    axisLine: { lineStyle: { color: "#9da8b5" } },
    axisLabel: { color: "#344053", fontFamily: "Inter", interval: 0 }
  },
  yAxis: {
    type: "value",
    name: "Number of persons",
    nameLocation: "middle",
    nameGap: 52,
    min: 0,
    axisLabel: { color: "#344053", fontFamily: "Inter", formatter: (v) => `${Math.round(v / 1000)}k` },
    splitLine: { lineStyle: { color: "#e8edf2" } }
  },
  series: [
    {
      name: "Employed persons",
      type: "bar",
      barMaxWidth: 42,
      data: labourAttachmentData.map((d) => d.employedPersons),
      itemStyle: { color: "#003366", borderRadius: [4, 4, 0, 0] },
      label: {
        show: true,
        position: "top",
        fontFamily: "Inter",
        color: "#1f2937",
        formatter: ({ value }) => `${Math.round(value / 1000)}k`
      }
    },
    {
      name: "Unemployed persons",
      type: "bar",
      barMaxWidth: 42,
      data: labourAttachmentData.map((d) => d.unemployedPersons),
      itemStyle: { color: "#649ee5", borderRadius: [4, 4, 0, 0] },
      label: {
        show: true,
        position: "top",
        fontFamily: "Inter",
        color: "#1f2937",
        formatter: ({ value }) => `${Math.round(value / 1000)}k`
      }
    }
  ]
};
attachmentChart.setOption(attachmentOption);

const replacementEl = document.getElementById("chart-replacement-demand");
const replacementChart = echarts.init(replacementEl);
const replacementOption = {
  grid: { left: 72, right: 34, top: 58, bottom: 64 },
  legend: {
    top: 14,
    textStyle: { fontFamily: "Public Sans", color: "#344053" },
    data: ["Employed 55+ growth (%)", "Unemployed 55+ growth (%)", "Labour force 55+ growth (%)"]
  },
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "shadow" },
    formatter: (params) => {
      const year = params[0]?.axisValue;
      const lines = params.map((p) => {
        return `${p.marker} ${p.seriesName}: ${p.value.toFixed(2)}%`;
      });
      return [year, ...lines].join("<br/>");
    }
  },
  xAxis: {
    type: "category",
    data: replacementDemandData.map((d) => d.year),
    axisLine: { lineStyle: { color: "#9da8b5" } },
    axisLabel: { color: "#344053", fontFamily: "Inter" }
  },
  yAxis: [
    {
      type: "value",
      name: "Employed/Labour force growth (%)",
      nameLocation: "middle",
      nameGap: 60,
      min: -6,
      max: 6,
      axisLabel: { color: "#344053", fontFamily: "Inter", formatter: (v) => `${v}%` },
      splitLine: { lineStyle: { color: "#e8edf2" } }
    },
    {
      type: "value",
      name: "Unemployed growth (%)",
      nameLocation: "middle",
      nameGap: 52,
      position: "right",
      min: -60,
      max: 80,
      axisLabel: { color: "#344053", fontFamily: "Inter", formatter: (v) => `${v}%` },
      splitLine: { show: false }
    }
  ],
  series: [
    {
      name: "Employed 55+ growth (%)",
      type: "bar",
      yAxisIndex: 0,
      barMaxWidth: 28,
      data: replacementDemandData.map((d) => +d.employedGrowth.toFixed(2)),
      itemStyle: { color: "#003366", borderRadius: [4, 4, 0, 0] },
      label: {
        show: true,
        position: "top",
        color: "#1f2937",
        fontFamily: "Inter",
        formatter: ({ value }) => `${value.toFixed(1)}%`
      }
    },
    {
      name: "Unemployed 55+ growth (%)",
      type: "bar",
      yAxisIndex: 1,
      barMaxWidth: 28,
      data: replacementDemandData.map((d) => +d.unemployedGrowth.toFixed(2)),
      itemStyle: { color: "#93c5fd", borderRadius: [4, 4, 0, 0] },
      label: {
        show: true,
        position: "top",
        color: "#1f2937",
        fontFamily: "Inter",
        formatter: ({ value }) => `${value.toFixed(1)}%`
      }
    },
    {
      name: "Labour force 55+ growth (%)",
      type: "line",
      yAxisIndex: 0,
      smooth: true,
      symbol: "circle",
      symbolSize: 7,
      data: replacementDemandData.map((d) => +d.labourForceGrowth.toFixed(2)),
      lineStyle: { color: "#f59e0b", width: 2.5 },
      itemStyle: { color: "#f59e0b" }
    }
  ]
};
replacementChart.setOption(replacementOption);

const programYears = workbcProgramIndicators.map((d) => d.year);
const makeMiniLine = (elId, seriesName, data, yFormatter, color, minPad = 0.9, maxPad = 1.1) => {
  const el = document.getElementById(elId);
  const chart = echarts.init(el);
  const vals = data.filter((v) => v != null);
  const min = Math.min(...vals) * minPad;
  const max = Math.max(...vals) * maxPad;

  chart.setOption({
    grid: { left: 40, right: 12, top: 10, bottom: 26 },
    tooltip: {
      trigger: "axis",
      formatter: (params) => `${params[0].axisValue}<br/>${params[0].marker} ${seriesName}: ${yFormatter(params[0].value)}`
    },
    xAxis: {
      type: "category",
      data: programYears,
      axisLabel: { color: "#6b7280", fontFamily: "Inter", fontSize: 10, interval: 1 },
      axisLine: { lineStyle: { color: "#d1d5db" } },
      axisTick: { show: false }
    },
    yAxis: {
      type: "value",
      min,
      max,
      axisLabel: { color: "#6b7280", fontFamily: "Inter", fontSize: 10, formatter: yFormatter },
      splitLine: { lineStyle: { color: "#eef2f7" } }
    },
    series: [
      {
        name: seriesName,
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        data,
        lineStyle: { color, width: 2 },
        itemStyle: { color },
        areaStyle: { color: `${color}22` }
      }
    ]
  });
  return chart;
};

const programUnempChart = makeMiniLine(
  "chart-program-unemp",
  "Unemployment (thousands)",
  workbcProgramIndicators.map((d) => d.unemploymentThousands),
  (v) => `${v.toFixed(1)}k`,
  "#003366"
);
const programLongTermChart = makeMiniLine(
  "chart-program-longterm",
  "Long-term unemployment share",
  workbcProgramIndicators.map((d) => d.longTermShare),
  (v) => `${v.toFixed(1)}%`,
  "#0b5f64"
);
const programYouthChart = makeMiniLine(
  "chart-program-youth",
  "Youth unemployment rate",
  workbcProgramIndicators.map((d) => d.youthUnemploymentRate),
  (v) => `${v.toFixed(1)}%`,
  "#649ee5"
);
const programSpreadChart = makeMiniLine(
  "chart-program-spread",
  "Regional unemployment spread",
  workbcProgramIndicators.map((d) => d.regionalSpread),
  (v) => `${v.toFixed(2)} pp`,
  "#b45309",
  0.7,
  1.3
);

const industryAgeEl = document.getElementById("chart-industry-average-age");
const industryAgeChart = echarts.init(industryAgeEl);
industryAgeChart.setOption({
  grid: { left: 290, right: 36, top: 20, bottom: 36 },
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "shadow" },
    valueFormatter: (v) => `${v.toFixed(2)} years`
  },
  xAxis: {
    type: "value",
    name: "Average age (years)",
    nameLocation: "middle",
    nameGap: 34,
    min: 34,
    max: 46,
    axisLabel: { color: "#344053", fontFamily: "Inter" },
    splitLine: { lineStyle: { color: "#e8edf2" } }
  },
  yAxis: {
    type: "category",
    inverse: true,
    data: industryAverageAgeData.map((d) => d.industry),
    axisLabel: { color: "#344053", fontFamily: "Inter", width: 260, overflow: "break" },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  series: [
    {
      type: "bar",
      data: industryAverageAgeData.map((d) => +d.avgAge.toFixed(2)),
      barMaxWidth: 22,
      itemStyle: { color: "#649ee5", borderRadius: [0, 4, 4, 0] },
      label: {
        show: true,
        position: "right",
        color: "#1f2937",
        fontFamily: "Inter",
        formatter: ({ value }) => `${value.toFixed(2)}`
      }
    }
  ]
});

const industryGapEl = document.getElementById("chart-industry-gender-gap");
const industryGapChart = echarts.init(industryGapEl);
industryGapChart.setOption({
  grid: { left: 320, right: 36, top: 20, bottom: 36 },
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "shadow" },
    formatter: (params) => {
      const idx = params[0].dataIndex;
      const row = industryGenderGapData[idx];
      return [
        row.industry,
        `${params[0].marker} Gap: ${row.gapPp.toFixed(2)} pp`,
        `Men+: ${row.menShare.toFixed(2)}%`,
        `Women+: ${row.womenShare.toFixed(2)}%`,
        `Dominant: ${row.direction}`
      ].join("<br/>");
    }
  },
  xAxis: {
    type: "value",
    name: "Gender gap (percentage points)",
    nameLocation: "middle",
    nameGap: 34,
    min: 0,
    max: 80,
    axisLabel: { color: "#344053", fontFamily: "Inter" },
    splitLine: { lineStyle: { color: "#e8edf2" } }
  },
  yAxis: {
    type: "category",
    inverse: true,
    data: industryGenderGapData.map((d) => d.industry),
    axisLabel: { color: "#344053", fontFamily: "Inter", width: 290, overflow: "break" },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  series: [
    {
      type: "bar",
      data: industryGenderGapData.map((d) => d.gapPp),
      barMaxWidth: 22,
      itemStyle: {
        color: (p) => (industryGenderGapData[p.dataIndex].direction === "Men+" ? "#2563eb" : "#0b5f64"),
        borderRadius: [0, 4, 4, 0]
      },
      label: {
        show: true,
        position: "right",
        color: "#1f2937",
        fontFamily: "Inter",
        formatter: ({ value, dataIndex }) =>
          `${value.toFixed(2)} pp (${industryGenderGapData[dataIndex].direction})`
      }
    }
  ]
});

const futureEl = document.getElementById("chart-migration-source-split");
const futureChart = echarts.init(futureEl);
const futureOption = {
  grid: { left: 74, right: 34, top: 62, bottom: 68 },
  legend: {
    top: 16,
    textStyle: { fontFamily: "Public Sans", color: "#344053" },
    data: ["Interprovincial migration", "International migration (excl. NPR)", "Net NPR change"]
  },
  tooltip: {
    trigger: "axis",
    axisPointer: { type: "cross" },
    valueFormatter: (v) => `${Math.round(v).toLocaleString()}`
  },
  xAxis: {
    type: "category",
    data: years,
    boundaryGap: false,
    axisLine: { lineStyle: { color: "#9da8b5" } },
    axisLabel: { color: "#344053", fontFamily: "Inter" }
  },
  yAxis: {
    type: "value",
    name: "Net persons",
    nameLocation: "middle",
    nameGap: 54,
    axisLabel: { color: "#344053", fontFamily: "Inter", formatter: (v) => `${Math.round(v / 1000)}k` },
    splitLine: { lineStyle: { color: "#e8edf2" } }
  },
  series: [
    {
      name: "Interprovincial migration",
      type: "line",
      stack: "migration",
      areaStyle: { opacity: 0.35, color: "#649ee5" },
      lineStyle: { color: "#649ee5", width: 1.8 },
      symbol: "circle",
      symbolSize: 5,
      data: interprov
    },
    {
      name: "International migration (excl. NPR)",
      type: "line",
      stack: "migration",
      areaStyle: { opacity: 0.35, color: "#003366" },
      lineStyle: { color: "#003366", width: 1.8 },
      symbol: "circle",
      symbolSize: 5,
      data: internationalExNpr
    },
    {
      name: "Net NPR change",
      type: "line",
      stack: "migration",
      areaStyle: { opacity: 0.35, color: "#0b5f64" },
      lineStyle: { color: "#0b5f64", width: 1.8 },
      symbol: "circle",
      symbolSize: 5,
      data: npr,
      markPoint: {
        symbol: "pin",
        symbolSize: 34,
        data: [{ name: "NPR peak", coord: ["2023", 114535], value: "Peak" }],
        label: { color: "#ffffff", fontSize: 9, fontWeight: 700 }
      }
    }
  ]
};
futureChart.setOption(futureOption);

const setIndicatorStatus = (elId, current, previous, betterWhen) => {
  const el = document.getElementById(elId);
  if (!el) return;
  const diff = current - previous;
  const small = Math.abs(diff) <= Math.abs(previous) * 0.03;
  let label = "Stable";
  let color = "#6b7280";

  if (!small) {
    if (betterWhen === "higher") {
      label = diff > 0 ? "Improving" : "Watch";
      color = diff > 0 ? "#0b5f64" : "#b91c1c";
    } else if (betterWhen === "lower") {
      label = diff < 0 ? "Improving" : "Watch";
      color = diff < 0 ? "#0b5f64" : "#b91c1c";
    } else {
      label = diff > 0 ? "Up" : "Down";
      color = "#334155";
    }
  }
  el.textContent = label;
  el.style.color = color;
};

const setIndicatorValue = (elId, valueText) => {
  const el = document.getElementById(elId);
  if (!el) return;
  el.textContent = valueText;
};

const miniSparkCharts = [];
const addSparkline = (elId, data, color, formatter) => {
  const el = document.getElementById(elId);
  if (!el) return;
  const chart = echarts.init(el);
  chart.setOption({
    grid: { left: 4, right: 4, top: 8, bottom: 14 },
    tooltip: {
      trigger: "axis",
      formatter: (params) => `${params[0].axisValue}<br/>${formatter(params[0].value)}`
    },
    xAxis: {
      type: "category",
      data: leadingIndicators.years,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false }
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: { show: false }
    },
    series: [
      {
        type: "line",
        smooth: true,
        symbol: "none",
        data,
        lineStyle: { color, width: 2 },
        areaStyle: { color: `${color}22` }
      }
    ]
  });
  miniSparkCharts.push(chart);
};

setIndicatorValue("value-interprov", `${leadingIndicators.interprovMigration.at(-1).toLocaleString()}`);
setIndicatorValue("value-npr", `${leadingIndicators.nprChange.at(-1).toLocaleString()}`);
setIndicatorValue("value-unemp-rate", `${leadingIndicators.unemploymentRate.at(-1).toFixed(1)}%`);
setIndicatorValue("value-vac-rate", `${leadingIndicators.vacancyRate.at(-1).toFixed(2)}%`);
setIndicatorValue("value-ei-proxy", `${leadingIndicators.eiProxyUnemploymentThousands.at(-1).toFixed(1)}k`);
setIndicatorValue("value-ri-er", `${leadingIndicators.recentImmigrantEmploymentRate.at(-1).toFixed(1)}%`);

setIndicatorStatus(
  "status-interprov",
  leadingIndicators.interprovMigration.at(-1),
  leadingIndicators.interprovMigration.at(-2),
  "higher"
);
setIndicatorStatus("status-npr", leadingIndicators.nprChange.at(-1), leadingIndicators.nprChange.at(-2), "higher");
setIndicatorStatus(
  "status-unemp-rate",
  leadingIndicators.unemploymentRate.at(-1),
  leadingIndicators.unemploymentRate.at(-2),
  "lower"
);
setIndicatorStatus("status-vac-rate", leadingIndicators.vacancyRate.at(-1), leadingIndicators.vacancyRate.at(-2), "none");
setIndicatorStatus(
  "status-ei-proxy",
  leadingIndicators.eiProxyUnemploymentThousands.at(-1),
  leadingIndicators.eiProxyUnemploymentThousands.at(-2),
  "lower"
);
setIndicatorStatus(
  "status-ri-er",
  leadingIndicators.recentImmigrantEmploymentRate.at(-1),
  leadingIndicators.recentImmigrantEmploymentRate.at(-2),
  "higher"
);

addSparkline(
  "spark-interprov",
  leadingIndicators.interprovMigration,
  "#2563eb",
  (v) => `${Math.round(v).toLocaleString()}`
);
addSparkline("spark-npr", leadingIndicators.nprChange, "#0b5f64", (v) => `${Math.round(v).toLocaleString()}`);
addSparkline("spark-unemp-rate", leadingIndicators.unemploymentRate, "#b91c1c", (v) => `${v.toFixed(1)}%`);
addSparkline("spark-vac-rate", leadingIndicators.vacancyRate, "#003366", (v) => `${v.toFixed(2)}%`);
addSparkline("spark-ei-proxy", leadingIndicators.eiProxyUnemploymentThousands, "#6b7280", (v) => `${v.toFixed(1)}k`);
addSparkline(
  "spark-ri-er",
  leadingIndicators.recentImmigrantEmploymentRate,
  "#7c2d12",
  (v) => `${v.toFixed(1)}%`
);

const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");
const setActiveTab = (targetId) => {
  tabPanels.forEach((panel) => {
    panel.classList.toggle("hidden", panel.id !== targetId);
  });
  tabButtons.forEach((btn) => {
    const isActive = btn.dataset.target === targetId;
    btn.classList.toggle("bg-white/10", isActive);
    btn.classList.toggle("border-l-4", isActive);
    btn.classList.toggle("border-blue-300", isActive);
    btn.classList.toggle("font-semibold", isActive);
    btn.classList.toggle("text-blue-100/80", !isActive);
  });

  if (targetId === "tab-population") {
    driverChart.resize();
    compositionChart.resize();
    regionalChart.resize();
    spaghettiChart.resize();
  } else if (targetId === "tab-labour") {
    labourChart.resize();
    attachmentChart.resize();
    replacementChart.resize();
  } else if (targetId === "tab-program") {
    programUnempChart.resize();
    programLongTermChart.resize();
    programYouthChart.resize();
    programSpreadChart.resize();
    industryAgeChart.resize();
    industryGapChart.resize();
  } else if (targetId === "tab-future") {
    futureChart.resize();
    miniSparkCharts.forEach((c) => c.resize());
  }
};

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => setActiveTab(btn.dataset.target));
});
setActiveTab("tab-population");

window.addEventListener("resize", () => {
  driverChart.resize();
  compositionChart.resize();
  regionalChart.resize();
  spaghettiChart.resize();
  labourChart.resize();
  attachmentChart.resize();
  replacementChart.resize();
  programUnempChart.resize();
  programLongTermChart.resize();
  programYouthChart.resize();
  programSpreadChart.resize();
  industryAgeChart.resize();
  industryGapChart.resize();
  futureChart.resize();
  miniSparkCharts.forEach((c) => c.resize());
});
