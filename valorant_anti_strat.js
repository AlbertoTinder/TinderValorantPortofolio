document.addEventListener('DOMContentLoaded', () => {
    // === NAVIGATION LOGIC ===
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    const pageTitle = document.getElementById('current-section-title');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));
            item.classList.add('active');
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
            pageTitle.innerText = item.innerText.trim();
        });
    });

    // === EXPORT PDF ===
    const exportBtn = document.querySelector('.btn-export');
    if(exportBtn) {
        exportBtn.addEventListener('click', () => {
            alert("Generando PDF del reporte de Anti-Strat...");
            window.print();
        });
    }

    // === DATA STRUCTURES ===
    const mapData = {
        'split': {
            image: 'split.jpg',
            defaultTitle: 'A-Main Heavy Default (3-1-1)',
            defaultDesc: 'KRÜ prioriza fuertemente el control de A-Main al inicio de las rondas. Agrupan al duelista y al iniciador en A-Lobby para forzar utilidades defensivas.',
            defaultBullets: [
                'El Sentinel mantiene B-Lobby para cortar flancos rápidos.',
                'El Controlador juega pasivo en Mid/Alcantarillas buscando picks.',
                'Suelen rotar rápido por base si enfrentan fuerte resistencia en A.'
            ],
            chartStrategy: [45, 30, 15, 10], // Fast, Mid, Fake, Contact
            chartSite: [42, 18, 15, 25] // A, Mid-A, Mid-B, B
        },
        'bind': {
            image: 'valorant_map_topdown.png',
            defaultTitle: 'B-Long Control & TP Pressure (1-3-1)',
            defaultDesc: 'En Bind (pick de 100T), KRÜ juega un ataque engañoso. Usan la presión en B-Long para forzar rotaciones tempranas y luego utilizar el Teleporter de B hacia A.',
            defaultBullets: [
                'Invierten 2 flashes iniciales en B-Long para tomar control absoluto.',
                'Un jugador siempre lurkea en A-Short esperando ruidos de rotación.',
                'Ejecuciones explosivas post-plant aprovechando los U-Halls.'
            ],
            chartStrategy: [20, 30, 40, 10], // Fast, Mid, Fake, Contact
            chartSite: [30, 15, 25, 30] // A, Mid-A, Mid-B, B
        },
        'haven': {
            image: 'haven.jpg',
            defaultTitle: 'A-Lobby & Garage Pinch (2-1-2)',
            defaultDesc: 'Un mapa donde KRÜ juega al contacto. Evitan rushes tempranos y prefieren tomar A-Lobby y presionar las puertas de Garaje en paralelo.',
            defaultBullets: [
                'Toman control de A-Lobby lento con drones o lobos.',
                'Rompen puertas de garaje temprano para crear paranoia.',
                'Altamente propensos a fakes en C para terminar ejecutando en A.'
            ],
            chartStrategy: [15, 25, 40, 20],
            chartSite: [45, 10, 20, 25]
        }
    };

    const playerData = {
        'mwzera': { 
            name: 'mwzera',
            role: 'Duelista Principal', 
            stats: ['35%', '61%', '5%'],
            habits: [
                '<strong>Manía (Ataque):</strong> Pide flashes por encima de muros apenas cae la barrera (alta previsibilidad).',
                '<strong>Debilidad (Defensa):</strong> Tiende a sobre-extenderse tras conseguir la primera sangre (overheat). Fácil de re-fraggear.',
                '<strong>Patrón:</strong> En ecos, siempre compra Sheriff y pushea Mid buscando aislar un 1v1.'
            ],
            atkHeatmap: [{top: '75%', left: '30%', class: 'high'}, {top: '65%', left: '45%', class: 'medium'}],
            defHeatmap: [{top: '25%', left: '35%', class: 'high'}, {top: '35%', left: '50%', class: 'medium'}]
        },
        'less': { 
            name: 'Less',
            role: 'Centinela / Lurker', 
            stats: ['12%', '15%', '72%'],
            habits: [
                '<strong>Manía (Ataque):</strong> Espera exactamente 45 segundos en posiciones pasivas antes de iniciar el flanco.',
                '<strong>Patrón:</strong> Si el equipo pierde 2 rondas seguidas, Less abandonará su set-up para pushear B-Main agresivo.',
                '<strong>Fortaleza:</strong> Muy disciplinado con el uso de humos/trampas post-plant. Nunca asoma.'
            ],
            atkHeatmap: [{top: '85%', left: '85%', class: 'high'}, {top: '70%', left: '50%', class: 'medium'}],
            defHeatmap: [{top: '20%', left: '75%', class: 'high'}, {top: '40%', left: '80%', class: 'medium'}]
        },
        'saadhak': { 
            name: 'saadhak',
            role: 'Controlador / IGL', 
            stats: ['8%', '22%', '25%'],
            habits: [
                '<strong>Patrón (Ataque):</strong> "El Fake de Saadhak". Tira 2 humos en un site (ej. B), pero su equipo ya está rotando a A.',
                '<strong>Tendencia:</strong> Prefiere jugar posiciones de ancla (anchor) muy cerradas con Judge o Phantom.',
                '<strong>Debilidad:</strong> Su micro-posicionamiento sufre cuando tiene que liderar retakes complejos bajo presión de tiempo.'
            ],
            atkHeatmap: [{top: '80%', left: '45%', class: 'high'}, {top: '60%', left: '35%', class: 'low'}],
            defHeatmap: [{top: '15%', left: '50%', class: 'high'}, {top: '25%', left: '25%', class: 'medium'}]
        },
        'silentzz': { 
            name: 'silentzz',
            role: 'Iniciador (Reconocimiento)', 
            stats: ['15%', '35%', '10%'],
            habits: [
                '<strong>Manía:</strong> Usa su dron/perro de forma casi robótica al segundo 1:30 para limpiar A-Main.',
                '<strong>Tendencia:</strong> Siempre es el segundo en entrar tras mwzera para buscar el trade (trade-fragger).',
            ],
            atkHeatmap: [{top: '70%', left: '55%', class: 'high'}],
            defHeatmap: [{top: '30%', left: '45%', class: 'high'}]
        },
        'dantedeu5': { 
            name: 'Dantedeu5',
            role: 'Flex / Iniciador Flash', 
            stats: ['10%', '28%', '15%'],
            habits: [
                '<strong>Patrón:</strong> Excelente uso de flashes para defender espacios, pero suele guardarlas demasiado en ataque.',
                '<strong>Debilidad:</strong> Rotaciones muy lentas en defensa. Suele ser el último en llegar al site.'
            ],
            atkHeatmap: [{top: '60%', left: '70%', class: 'medium'}],
            defHeatmap: [{top: '10%', left: '85%', class: 'high'}]
        }
    };

    let currentMap = 'split';
    let currentSide = 'attack';
    let currentPlayer = 'mwzera';

    // Chart instances
    let strategyChartInst = null;
    let siteChartInst = null;

    Chart.defaults.color = '#8a919e';
    Chart.defaults.font.family = 'Inter';

    function initCharts() {
        const ctxStrategy = document.getElementById('strategyChart').getContext('2d');
        strategyChartInst = new Chart(ctxStrategy, {
            type: 'doughnut',
            data: {
                labels: ['Fast Execute', 'Mid Control Default', 'Fake / Rotate', 'Contact Play'],
                datasets: [{
                    data: mapData['split'].chartStrategy,
                    backgroundColor: ['#ff005b', '#00e5ff', '#eb0029', '#4a5568'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'right' } }, cutout: '70%' }
        });

        const ctxSite = document.getElementById('siteTendencyChart').getContext('2d');
        siteChartInst = new Chart(ctxSite, {
            type: 'bar',
            data: {
                labels: ['A Site', 'Mid to A', 'Mid to B', 'B Site'],
                datasets: [{
                    label: 'Execution Freq %',
                    data: mapData['split'].chartSite,
                    backgroundColor: 'rgba(255, 0, 91, 0.8)',
                    borderRadius: 4
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                scales: { y: { beginAtZero: true, max: 50, grid: { color: 'rgba(255, 255, 255, 0.05)' } }, x: { grid: { display: false } } },
                plugins: { legend: { display: false } }
            }
        });
    }

    function updateMapData() {
        const d = mapData[currentMap];
        // Update images
        document.querySelectorAll('.base-map').forEach(img => img.src = d.image);
        
        // Update Default Breakdown text
        document.querySelector('.default-text h4').innerText = d.defaultTitle;
        document.querySelector('.default-text p').innerText = d.defaultDesc;
        const ul = document.querySelector('.default-text ul');
        ul.innerHTML = '';
        d.defaultBullets.forEach(b => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>*</strong> ${b}`;
            ul.appendChild(li);
        });

        // Update Charts
        if(strategyChartInst && siteChartInst) {
            strategyChartInst.data.datasets[0].data = d.chartStrategy;
            strategyChartInst.update();
            siteChartInst.data.datasets[0].data = d.chartSite;
            siteChartInst.update();
        }
    }

    function updatePlayerData() {
        const pd = playerData[currentPlayer];
        document.querySelector('.p-name').innerText = pd.name;
        document.querySelector('.p-role').innerText = pd.role;
        const mvals = document.querySelectorAll('.m-val');
        mvals[0].innerText = pd.stats[0];
        mvals[1].innerText = pd.stats[1];
        mvals[2].innerText = pd.stats[2];

        const habitsUl = document.querySelector('.p-habits ul');
        habitsUl.innerHTML = '';
        pd.habits.forEach(h => {
            const li = document.createElement('li');
            li.innerHTML = h;
            habitsUl.appendChild(li);
        });

        // Update heatmap text
        const heatmapTitle = document.querySelector('.heatmap-card h3');
        heatmapTitle.innerHTML = `<i class="fa-solid fa-fire"></i> Posiciones Frecuentes (${currentSide === 'attack' ? 'Atk' : 'Def'})`;

        // Update heatmap blobs
        const hmContainer = document.querySelector('.heatmap-container');
        // Remove existing blobs
        hmContainer.querySelectorAll('.heat-blob').forEach(b => b.remove());
        
        const blobs = currentSide === 'attack' ? pd.atkHeatmap : pd.defHeatmap;
        blobs.forEach(b => {
            const div = document.createElement('div');
            div.className = `heat-blob ${b.class}`;
            div.style.top = b.top;
            div.style.left = b.left;
            hmContainer.appendChild(div);
        });
    }

    // Interactive Map Select
    const mapSelect = document.getElementById('map-select');
    mapSelect.addEventListener('change', (e) => {
        currentMap = e.target.value === 'all' ? 'split' : e.target.value;
        updateMapData();
    });

    // Interactive Side Toggle
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSide = btn.getAttribute('data-side');
            updatePlayerData();
        });
    });

    // Interactive Player Select
    const playerSelects = document.querySelectorAll('.p-select');
    playerSelects.forEach(select => {
        select.addEventListener('click', () => {
            playerSelects.forEach(s => s.classList.remove('active'));
            select.classList.add('active');
            currentPlayer = select.getAttribute('data-player');
            updatePlayerData();
        });
    });

    // === VOD ENGINE MOCK LOGIC ===
    const btnAnalyzeVod = document.getElementById('btn-analyze-vod');
    const vodInput = document.getElementById('vod-url');
    const trackerBox = document.getElementById('vod-tracker-box');
    const insightList = document.getElementById('vod-insight-list');

    if(btnAnalyzeVod) {
        btnAnalyzeVod.addEventListener('click', () => {
            const val = vodInput.value.trim();
            if(!val) {
                alert("Please paste a valid YouTube/VLR link or timestamp.");
                return;
            }
            
            btnAnalyzeVod.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Analyzing...';
            
            // Mock tracking animation sequence
            setTimeout(() => {
                trackerBox.style.top = '40%';
                trackerBox.style.left = '55%';
            }, 1000);

            setTimeout(() => {
                trackerBox.style.top = '60%';
                trackerBox.style.left = '65%';
            }, 2500);

            setTimeout(() => {
                trackerBox.style.top = '25%';
                trackerBox.style.left = '35%';
            }, 4000);

            setTimeout(() => {
                btnAnalyzeVod.innerHTML = '<i class="fa-solid fa-check"></i> Analysis Complete';
                
                // Add a new insight based on "Video extraction"
                const newInsight = document.createElement('li');
                newInsight.innerHTML = `
                    <span class="insight-time">Live Extraction - 0:42</span>
                    <p><strong>Path Prediction:</strong> El jugador trazado usa la misma ruta (Mid -> Ventilación) en el 82% de las rondas ecos. Vulnerabilidad detectada.</p>
                `;
                insightList.prepend(newInsight);

                setTimeout(() => {
                    btnAnalyzeVod.innerHTML = '<i class="fa-solid fa-microchip"></i> Analyze Video';
                }, 3000);
            }, 4500);
        });
    }

    // Initialize
    initCharts();
    updateMapData();
    updatePlayerData();
});

