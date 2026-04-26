// --- Data and Mock Backend ---
// Imported logic with real players (Rebels/Reject)
const teamStats = {
    overallWinrate: 62.5,
    attackWinrate: 54.1,
    defenseWinrate: 58.3,
    matchesPlayed: 45,
    acsAvg: 235,
    kdrAvg: 1.15
};

const players = [
    { 
      name: "jannyxD", role: "Duelist", main: "Raze / Jett", initials: "JX", color: "#60a5fa",
      recentPerformance: "Has been consistently creating strong entry space during the last 5 scrims. Entry timing with initiator flashes has improved significantly compared to last week.",
      areasOfImprovement: "Needs to avoid autopiloting when the team has numerical advantage (e.g. 5v3 situations). Over-aggression is costing unnecessary rounds. We need to recognize when to slow the pace and secure advantages.",
      mentalAndPersonal: "Gets frustrated quickly after losing the first few rounds. Should implement breathing/reset routines between rounds. Outside of game, seems slightly stressed—ensure proper rest and time away from the PC.",
      actionPlan: "1v1 VOD review focused on mid-round decision making and playing advantage situations."
    },
    { 
      name: "vo0kashu", role: "Sentinel", main: "Killjoy / Cypher", initials: "VO", color: "#c4b5fd",
      recentPerformance: "Excellent anchor consistency. Cypher setups on Sunset completely shut down GX yesterday. Adaptability has improved significantly compared to last month.",
      areasOfImprovement: "Communication during rotations is still too quiet. Needs clearer and louder calls when leaving anchor positions to support the other site.",
      mentalAndPersonal: "Very emotionally stable and provides strong grounding for the team. Make sure their impact is acknowledged, as Sentinel value is not always reflected in scoreboard performance.",
      actionPlan: "Custom server session to finalize Killjoy retake setups on Lotus."
    },
    { 
      name: "musashi", role: "Initiator", main: "Sova / Fade", initials: "MU", color: "#fcd34d",
      recentPerformance: "Utility usage is currently at a peak level. Fade pressure on Ascent mid consistently creates early picks for duelists.",
      areasOfImprovement: "Occasionally uses utility too early based on incorrect reads. Needs to preserve Sova drone for executes rather than early-round information gathering.",
      mentalAndPersonal: "Takes losses personally and tends to self-blame for utility usage. Needs reinforcement that Valorant is a team game and not every lost round is an initiator mistake. Very team-oriented mindset.",
      actionPlan: "Review “utility economy” concept in theory session. Reinforce secondary IGL value."
    },
    { 
      name: "wolverine", role: "Controller", main: "Omen / Viper", initials: "WO", color: "#a78bfa",
      recentPerformance: "Struggled slightly with Viper wall timings on Icebox this week, but Omen performance on Haven was flawless. Excellent macro map understanding.",
      areasOfImprovement: "Needs to delegate more micro-calling to duelists. Over-managing team positioning while staying alive is reducing focus.",
      mentalAndPersonal: "High burnout risk due to IGL responsibilities. Recommend full rest day on Sundays with no Valorant. Mental fatigue is impacting late-round shotcalling.",
      actionPlan: "Shift early-round calling responsibility to musashi. Schedule relaxed 1v1 check-in (non-VOD, personal discussion)."
    },
    { 
      name: "Yowamu", role: "Flex", main: "Breach / KAY/O", initials: "YO", color: "#f87171",
      recentPerformance: "Clutch win rate has significantly improved. Mechanical consistency is translating well from practice into scrims.",
      areasOfImprovement: "Spacing during executes is inconsistent. Often too far ahead or too far behind duelists to reliably trade.",
      mentalAndPersonal: "Performs well in high momentum situations but becomes quiet during losing streaks. Needs to maintain vocal presence even when morale is low.",
      actionPlan: "Spacing drills during server time tomorrow. Pair with jannyxD for 2v2 retake exercises to build natural chemistry."
    }
];

const mockVods = [
    { 
      map: "Ascent", opponent: "FNATIC", date: "Oct 12", result: "Win 13-10", issue: "Mid Control & Trading",
      positives: "Great double peeks on A Main. vo0kashu's KJ setups stalled B effectively.",
      coachNote: "jannyxD needs to wait for the flash before jumping out of the smoke on Market.",
      playerNote: "wolverine: My smokes were late on round 5, will fix."
    },
    { 
      map: "Haven", opponent: "Team Heretics", date: "Oct 10", result: "Loss 9-13", issue: "A Retake Coordination",
      positives: "Good eco rounds. Yowamu's Breach flashes created space.",
      coachNote: "A-retakes are failing because we are giving up lobby too easily.",
      playerNote: "musashi: I will save drone for the retake instead of early info."
    },
    { 
      map: "Lotus", opponent: "Karmine Corp", date: "Oct 08", result: "Win 13-8", issue: "Rubble Aggression",
      positives: "Perfect early Rubble control. Trades were on point.",
      coachNote: "Keep pressing A Rubble, but don't overextend into their spawn.",
      playerNote: "jannyxD: Felt very comfortable taking the aggressive duels today."
    }
];

const calendarDays = [
    { day: 31, inactive: true, tags: [] },
    { day: 1, tags: [
        {text: "VOD Review", type: "vod", icon: "fa-solid fa-video"},
        {text: "Server Run", type: "practice", icon: "fa-solid fa-server"}
    ] },
    { day: 2, tags: [
        {text: "Theory Bind Defaults", type: "vod", icon: "fa-solid fa-chalkboard"},
        {text: "vs NAVI", type: "scrim", icon: "fa-solid fa-crosshairs"}
    ] },
    { day: 3, tags: [
        {text: "Escape Room", type: "practice", icon: "fa-solid fa-puzzle-piece"}
    ] },
    { day: 4, tags: [
        {text: "Server Drills", type: "practice", icon: "fa-solid fa-server"},
        {text: "vs BBL", type: "scrim", icon: "fa-solid fa-crosshairs"}
    ] },
    { day: 5, tags: [
        {text: "Theory Ascent Retakes", type: "vod", icon: "fa-solid fa-chalkboard"}
    ] },
    { day: 6, tags: [
        {text: "VOD Review FNATIC", type: "vod", icon: "fa-solid fa-video"}
    ] },
    { day: 7, tags: [] },
    { day: 8, tags: [
        {text: "Dry Runs Lotus", type: "practice", icon: "fa-solid fa-server"},
        {text: "vs Liquid", type: "scrim", icon: "fa-solid fa-crosshairs"}
    ] },
    { day: 9, tags: [
        {text: "VOD Feedback", type: "vod", icon: "fa-solid fa-comment-dots"}
    ] },
    { day: 10, tags: [
        {text: "Retake Drill Split", type: "practice", icon: "fa-solid fa-server"},
        {text: "vs TH", type: "scrim", icon: "fa-solid fa-crosshairs"}
    ] },
    { day: 11, tags: [
        {text: "Theory CT/T Side", type: "vod", icon: "fa-solid fa-chalkboard"},
        {text: "vs FNC", type: "scrim", icon: "fa-solid fa-crosshairs"}
    ] },
    { day: 12, tags: [
        {text: "Mental Prep", type: "vod", icon: "fa-solid fa-brain"}
    ] },
    { day: 13, active: true, tags: [
        {text: "Brainstorming", type: "practice", icon: "fa-solid fa-lightbulb"},
        {text: "vs KC", type: "scrim", icon: "fa-solid fa-crosshairs"}
    ] },
    { day: 14, tags: [] },
    { day: 15, active: true, tags: [
        {text: "VCT Media Day", type: "scrim", icon: "fa-solid fa-camera"},
        {text: "Ascent Exec", type: "practice", icon: "fa-solid fa-server"}
    ] },
    { day: 16, tags: [
        {text: "VOD vs KC", type: "vod", icon: "fa-solid fa-video"}
    ] },
    { day: 17, tags: [
        {text: "Theory Sunset", type: "vod", icon: "fa-solid fa-chalkboard"},
        {text: "vs KOI", type: "scrim", icon: "fa-solid fa-crosshairs"}
    ] },
    { day: 18, tags: [
        {text: "Gym & Chill", type: "practice", icon: "fa-solid fa-dumbbell"}
    ] },
    { day: 19, tags: [] },
    { day: 20, tags: [] }
];

// --- AI Logic Generator ---
// Dynamic analysis based on the team/player stats
function generateAIInsights() {
    let insights = [];
    
    // Logic based on team stats
    if (teamStats.attackWinrate < teamStats.defenseWinrate) {
        insights.push({
            icon: '<i class="fa-solid fa-triangle-exclamation" style="color: var(--danger);"></i>', title: "Attack Side Needs Work",
            desc: `Your attack winrate (${teamStats.attackWinrate}%) is significantly lower than defense. Consider reviewing default setups and entry pathing.`
        });
    } else {
        insights.push({
            icon: '<i class="fa-solid fa-circle-check" style="color: var(--success);"></i>', title: "Strong Attacking Half",
            desc: `Excellent attack winrate (${teamStats.attackWinrate}%). Executions are sharp.`
        });
    }

    if (teamStats.acsAvg > 220) {
        insights.push({
            icon: '<i class="fa-solid fa-fire" style="color: #fbbf24;"></i>', title: "High Team Firepower",
            desc: `Team average ACS is ${teamStats.acsAvg}. Players like jannyxD are winning their 1v1 duels consistently.`
        });
    }

    // Logic based on player stats
    const lowKdrPlayer = players.find(p => p.kdr < 1.0);
    if (lowKdrPlayer) {
        insights.push({
            icon: '<i class="fa-solid fa-chart-simple" style="color: #60a5fa;"></i>', title: `${lowKdrPlayer.name} Performance Drop`,
            desc: `As a ${lowKdrPlayer.role}, their KDR is ${lowKdrPlayer.kdr}. Make sure they are being properly traded on site holds.`
        });
    }

    return insights.map(ins => `
        <div class="insight-item">
            <div class="insight-icon">${ins.icon}</div>
            <div class="insight-content">
                <strong>${ins.title}</strong>
                <p>${ins.desc}</p>
            </div>
        </div>
    `).join('');
}

// --- Views Data ---
const viewsData = {
    dashboard: {
        title: "Performance Dashboard",
        desc: "Analyzing recent scrims and official matches data.",
        render: () => `
            <div style="background: rgba(139, 92, 246, 0.15); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 8px; padding: 12px 15px; margin-bottom: 20px; display: flex; align-items: center; gap: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                <div style="background: rgba(139, 92, 246, 0.2); width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; flex-shrink: 0;">
                    <i class="fa-solid fa-camera-retro" style="color: #c4b5fd; font-size: 1.2rem;"></i>
                </div>
                <div>
                    <h4 style="color: #c4b5fd; margin: 0 0 4px 0; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px;">Manager Announcement</h4>
                    <p style="color: white; margin: 0; font-size: 0.95rem;">${appTranslations[currentLang].media_day}</p>
                </div>
            </div>
            
            <div class="dashboard-grid">
                <div class="stat-card">
                    <div class="stat-card-header">
                        <span>Overall Winrate</span>
                        <i class="fa-solid fa-trophy" style="color: var(--accent-red)"></i>
                    </div>
                    <div class="stat-value">${teamStats.overallWinrate}%</div>
                    <div class="stat-trend trend-up">
                        <i class="fa-solid fa-arrow-trend-up"></i>
                        <span>+4.2% from last week</span>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="stat-card-header">
                        <span>Attack Round Win %</span>
                        <i class="fa-solid fa-khanda" style="color: #8b97a3"></i>
                    </div>
                    <div class="stat-value">${teamStats.attackWinrate}%</div>
                    <div class="stat-trend trend-down">
                        <i class="fa-solid fa-arrow-trend-down"></i>
                        <span>-1.5% from last week</span>
                    </div>
                </div>

                <div class="stat-card">
                    <div class="stat-card-header">
                        <span>Defense Round Win %</span>
                        <i class="fa-solid fa-shield-halved" style="color: #8b97a3"></i>
                    </div>
                    <div class="stat-value">${teamStats.defenseWinrate}%</div>
                    <div class="stat-trend trend-up">
                        <i class="fa-solid fa-arrow-trend-up"></i>
                        <span>+2.1% from last week</span>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-card-header">
                        <span>Team Avg ACS</span>
                        <i class="fa-solid fa-crosshairs" style="color: #8b97a3"></i>
                    </div>
                    <div class="stat-value">${teamStats.acsAvg}</div>
                    <div class="stat-trend trend-up">
                        <i class="fa-solid fa-arrow-trend-up"></i>
                        <span>Solid Firepower</span>
                    </div>
                </div>
            </div>

            <div class="insights-panel" style="border: 1px solid rgba(88, 101, 242, 0.3); border-radius: 8px; overflow: hidden; background: var(--bg-card);">
                <div class="insights-title" style="background: rgba(88, 101, 242, 0.1); border-bottom: 1px solid rgba(88, 101, 242, 0.2); padding: 15px; display: flex; justify-content: space-between; align-items: center; margin: 0;">
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <i class="fa-brands fa-discord" style="color: #5865F2; font-size: 1.2rem;"></i>
                        <span style="color: white; font-weight: bold; font-size: 1rem;">Synced from #recent-feedback</span>
                    </div>
                    <span style="background: rgba(88, 101, 242, 0.2); color: #5865F2; padding: 3px 8px; border-radius: 4px; font-size: 0.7rem; font-weight: bold;">LIVE</span>
                </div>
                <div class="insights-list" style="padding: 15px; display: flex; flex-direction: column; gap: 15px;">
                    <div style="display: flex; gap: 12px; background: rgba(255,255,255,0.02); padding: 12px; border-radius: 6px;">
                        <div style="width: 35px; height: 35px; background: #f87171; border-radius: 50%; display: flex; justify-content: center; align-items: center; font-weight: bold; color: white; flex-shrink: 0;">C</div>
                        <div>
                            <div style="margin-bottom: 5px;"><strong style="color: #f87171; font-size: 0.9rem;">Coach Tinder</strong> <span style="color: var(--text-secondary); font-size: 0.75rem; margin-left: 5px;">Today at 10:45 AM</span></div>
                            <div style="color: #dbdee1; font-size: 0.85rem; line-height: 1.5;">
                                Focus on Ascent Mid control. Practice the new retake stagger timing (Omen smoke delay + Fade sensor).<br><br>
                                On Bind: test fast B off the break. Don't default to A short — it's their strength.<br><br>
                                IGL: read lurk patterns.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    goals: {
        title: "Goals & Progress",
        desc: "Track weekly objectives and player improvements.",
        render: () => `
            <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
                <!-- Main Column: Notion style lists -->
                <div style="flex: 2; min-width: 320px; display: flex; flex-direction: column; gap: 1.5rem;">
                    
                    <!-- Daily -->
                    <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px; margin-bottom: 15px;">
                            <h3 style="color: var(--text-primary); font-size: 1.1rem;"><i class="fa-solid fa-sun" style="color: #fbbf24; margin-right: 8px;"></i> Daily Focus & Objectives</h3>
                            <span style="font-size: 0.8rem; color: var(--text-secondary);">Today</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <label style="display: flex; align-items: flex-start; gap: 12px; cursor: pointer; color: var(--text-primary); font-size: 0.95rem; line-height: 1.4;">
                                <input type="checkbox" checked style="accent-color: var(--accent-red); width: 16px; height: 16px; margin-top: 2px;">
                                <span style="text-decoration: line-through; color: var(--text-secondary);"><strong style="color: #60a5fa;">Teamwork:</strong> Improve passive vs active comms in post-plants</span>
                            </label>
                            <label style="display: flex; align-items: flex-start; gap: 12px; cursor: pointer; color: var(--text-primary); font-size: 0.95rem; line-height: 1.4;">
                                <input type="checkbox" style="accent-color: var(--accent-red); width: 16px; height: 16px; margin-top: 2px;">
                                <span><strong style="color: #f87171;">Duelists:</strong> Playstyle more aggro, commit to getting more opening entries</span>
                            </label>
                            <label style="display: flex; align-items: flex-start; gap: 12px; cursor: pointer; color: var(--text-primary); font-size: 0.95rem; line-height: 1.4;">
                                <input type="checkbox" style="accent-color: var(--accent-red); width: 16px; height: 16px; margin-top: 2px;">
                                <span><strong style="color: #c084fc;">Controllers:</strong> Better smoke efficiency, coordinate timings with the entry</span>
                            </label>
                            <label style="display: flex; align-items: flex-start; gap: 12px; cursor: pointer; color: var(--text-primary); font-size: 0.95rem; line-height: 1.4;">
                                <input type="checkbox" style="accent-color: var(--accent-red); width: 16px; height: 16px; margin-top: 2px;">
                                <span><strong style="color: #fbbf24;">Initiators:</strong> Be careful not to burn utility too fast early round</span>
                            </label>
                            <div style="color: var(--text-secondary); margin-top: 5px; font-size: 0.9rem; cursor: pointer; display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-plus"></i> Add new focus</div>
                        </div>
                    </div>

                    <!-- Weekly -->
                    <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px; margin-bottom: 15px;">
                            <h3 style="color: var(--text-primary); font-size: 1.1rem;"><i class="fa-solid fa-calendar-week" style="color: #60a5fa; margin-right: 8px;"></i> Week Goals</h3>
                            <span style="font-size: 0.8rem; color: var(--text-secondary);">Current</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <div style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 6px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; align-items: center;">
                                    <strong style="color: var(--text-primary); font-size: 0.95rem;">Improve Haven Retakes</strong>
                                    <span style="font-size: 0.8rem; background: rgba(16, 185, 129, 0.2); color: #6ee7b7; padding: 3px 8px; border-radius: 4px;">80%</span>
                                </div>
                                <div style="width: 100%; background: #333; height: 8px; border-radius: 4px;">
                                    <div style="width: 80%; background: var(--success); height: 100%; border-radius: 4px;"></div>
                                </div>
                            </div>
                            <div style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 6px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; align-items: center;">
                                    <strong style="color: var(--text-primary); font-size: 0.95rem;">Pistol Round Consistency</strong>
                                    <span style="font-size: 0.8rem; background: rgba(245, 158, 11, 0.2); color: #fcd34d; padding: 3px 8px; border-radius: 4px;">45%</span>
                                </div>
                                <div style="width: 100%; background: #333; height: 8px; border-radius: 4px;">
                                    <div style="width: 45%; background: var(--warning); height: 100%; border-radius: 4px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Monthly & Long Term -->
                    <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px; margin-bottom: 15px;">
                            <h3 style="color: var(--text-primary); font-size: 1.1rem;"><i class="fa-solid fa-flag-checkered" style="color: #c084fc; margin-right: 8px;"></i> Month Objectives</h3>
                        </div>
                        
                        <!-- Scrims & Tactical -->
                        <div style="margin-bottom: 18px;">
                            <h4 style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;"><i class="fa-solid fa-server" style="margin-right: 5px;"></i> Scrims & Tactical</h4>
                            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
                                <li style="display: flex; align-items: flex-start; gap: 10px; color: var(--text-primary); font-size: 0.9rem; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px;">
                                    <i class="fa-solid fa-caret-right" style="color: #60a5fa; margin-top: 3px;"></i>
                                    <div style="line-height: 1.4;">
                                        <strong style="color: white;">Fundamentals & Comms:</strong> Clear passive/active comms during post-plants and clean retake spacing.
                                    </div>
                                </li>
                                <li style="display: flex; align-items: flex-start; gap: 10px; color: var(--text-primary); font-size: 0.9rem; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px;">
                                    <i class="fa-solid fa-caret-right" style="color: #60a5fa; margin-top: 3px;"></i>
                                    <div style="line-height: 1.4;">
                                        <strong style="color: white;">Map Pool & Economy:</strong> Consolidate Sunset into the map pool and boost pistol round win-rate.
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- Officials & Psychology -->
                        <div>
                            <h4 style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;"><i class="fa-solid fa-brain" style="margin-right: 5px;"></i> Officials & Psychology</h4>
                            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
                                <li style="display: flex; align-items: flex-start; gap: 10px; color: var(--text-primary); font-size: 0.9rem; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; border-left: 2px solid #ec4899;">
                                    <i class="fa-solid fa-caret-right" style="color: #ec4899; margin-top: 3px;"></i>
                                    <div style="line-height: 1.4;">
                                        <strong style="color: white;">Emotional Control:</strong> Cold mentality on stage. Stay motivated but stable—avoid massive emotional highs and lows.
                                    </div>
                                </li>
                                <li style="display: flex; align-items: flex-start; gap: 10px; color: var(--text-primary); font-size: 0.9rem; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; border-left: 2px solid #ec4899;">
                                    <i class="fa-solid fa-caret-right" style="color: #ec4899; margin-top: 3px;"></i>
                                    <div style="line-height: 1.4;">
                                        <strong style="color: white;">Moral Support:</strong> Hype up your teammates actively. Always inject positivity to recover momentum after lost rounds.
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>

                <!-- Right Column: Player Focus & Archived -->
                <div style="flex: 1; min-width: 280px; display: flex; flex-direction: column; gap: 1.5rem;">
                    
                    <!-- Player Focus -->
                    <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px;">
                        <h3 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 1.2rem; display: flex; align-items: center;"><i class="fa-solid fa-user-focus" style="color: var(--accent-red); margin-right: 8px;"></i> Player Focus</h3>
                        <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px;">
                            ${players.map(p => `
                                <li style="display: flex; flex-direction: column; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                                    <span style="font-weight: 500; color: var(--text-primary); font-size: 0.95rem;">${p.name} <span style="font-size:0.75rem; color:var(--text-secondary);">(${p.role})</span></span>
                                    <span style="color: var(--accent-red); font-size: 0.85rem; margin-top: 4px;">
                                        <i class="fa-solid fa-crosshairs" style="font-size:0.7rem; margin-right:4px;"></i> 
                                        ${p.role === 'Duelist' ? 'Entry Pathing & Dash timings' : (p.role === 'Controller' ? 'Smoke Timings on Exec' : 'Utility Usage & Spacing')}
                                    </span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <!-- Archived -->
                    <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; opacity: 0.6;">
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px; margin-bottom: 15px;">
                            <h3 style="color: var(--text-secondary); font-size: 1rem;"><i class="fa-solid fa-box-archive" style="margin-right: 8px;"></i> Archived</h3>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <label style="display: flex; align-items: center; gap: 10px; color: var(--text-secondary); font-size: 0.85rem;">
                                <i class="fa-solid fa-check" style="color: var(--success);"></i>
                                <span style="text-decoration: line-through;">Fix Bind B Defense Rotations</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 10px; color: var(--text-secondary); font-size: 0.85rem;">
                                <i class="fa-solid fa-check" style="color: var(--success);"></i>
                                <span style="text-decoration: line-through;">Setup Ascent default comps</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 10px; color: var(--text-secondary); font-size: 0.85rem;">
                                <i class="fa-solid fa-check" style="color: var(--success);"></i>
                                <span style="text-decoration: line-through;">Sign Assistant Coach</span>
                            </label>
                        </div>
                    </div>

                </div>
            </div>
        `
    },
    scrims: {
        title: "Schedule & Scrims",
        desc: "Comprehensive monthly calendar and detailed weekly timeline.",
        render: () => `
            <!-- Monthly Calendar View -->
            <div class="stat-card" style="margin-bottom: 1.5rem; padding: 1.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <h3 style="color: var(--text-primary); font-size: 1.2rem;"><i class="fa-regular fa-calendar-days" style="margin-right: 8px; color: #60a5fa;"></i> Monthly Overview <span style="color: var(--text-secondary); font-size: 0.9rem; font-weight: normal; margin-left: 10px;">April 2025</span></h3>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <span style="font-size: 0.8rem; background: rgba(239,68,68,0.2); color: #f87171; padding: 3px 8px; border-radius: 4px;">Scrim</span>
                        <span style="font-size: 0.8rem; background: rgba(59,130,246,0.2); color: #60a5fa; padding: 3px 8px; border-radius: 4px;">Drills</span>
                        <span style="font-size: 0.8rem; background: rgba(139,92,246,0.2); color: #c4b5fd; padding: 3px 8px; border-radius: 4px;">VOD</span>
                        <button style="background: transparent; color: var(--text-secondary); border: 1px solid rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 4px; cursor: pointer; margin-left: 10px;"><i class="fa-solid fa-download"></i></button>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; margin-bottom: 5px;">
                    ${['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(d => `<div style="text-align: center; color: var(--text-secondary); font-size: 0.75rem; letter-spacing: 1px; margin-bottom: 5px;">${d}</div>`).join('')}
                    ${calendarDays.map(d => `
                        <div style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.05); border-radius: 6px; padding: 8px; min-height: 85px; opacity: ${d.inactive ? '0.4' : '1'}; ${d.active ? 'border-color: rgba(239,68,68,0.5); box-shadow: 0 0 10px rgba(239,68,68,0.1); background: rgba(239,68,68,0.05);' : ''} transition: 0.2s; cursor: pointer;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='${d.active ? 'rgba(239,68,68,0.05)' : 'rgba(0,0,0,0.2)'}'">
                            <div style="color: ${d.active ? 'white' : 'var(--text-secondary)'}; font-size: 0.9rem; margin-bottom: 8px; font-weight: ${d.active ? 'bold' : 'normal'}; display: flex; justify-content: space-between;">
                                <span>${d.day}</span>
                                ${d.active ? '<div style="width:6px; height:6px; background:var(--accent-red); border-radius:50%; margin-top:4px;"></div>' : ''}
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 4px;">
                                ${d.tags.map(t => `<div style="${t.type === 'scrim' ? 'background: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid rgba(239,68,68,0.3);' : (t.type === 'practice' ? 'background: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid rgba(59,130,246,0.3);' : 'background: rgba(139, 92, 246, 0.2); color: #c4b5fd; border: 1px solid rgba(139,92,246,0.3);')} font-size: 0.7rem; padding: 3px 6px; border-radius: 4px; font-weight: bold; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><i class="${t.icon}" style="margin-right: 4px; font-size: 0.65rem;"></i>${t.text}</div>`).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Notes and Upcoming (2 columns) -->
            <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
                
                <!-- Upcoming Sessions -->
                <div style="flex: 1; min-width: 300px; background: var(--bg-card); padding: 1.5rem; border-radius: 8px;">
                    <h3 style="color: var(--text-secondary); font-size: 0.85rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 15px;">Upcoming Sessions</h3>
                    
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        <div style="padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: flex-start;">
                            <div>
                                <strong style="color: white; font-size: 1rem; display: block; margin-bottom: 4px;">vs KC — Today 20:00</strong>
                                <span style="color: var(--text-secondary); font-size: 0.85rem;">Maps: Ascent, Bind · Focus: Mid control</span>
                            </div>
                            <span style="font-size: 0.75rem; background: rgba(239,68,68,0.2); color: #f87171; padding: 3px 8px; border-radius: 4px; font-weight: bold;">Scrim</span>
                        </div>
                        <div style="padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: flex-start;">
                            <div>
                                <strong style="color: white; font-size: 1rem; display: block; margin-bottom: 4px;">Ascent Exec Drills — Apr 15</strong>
                                <span style="color: var(--text-secondary); font-size: 0.85rem;">Maps: Ascent · Focus: A-site splits</span>
                            </div>
                            <span style="font-size: 0.75rem; background: rgba(59,130,246,0.2); color: #60a5fa; padding: 3px 8px; border-radius: 4px; font-weight: bold;">Practice</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div>
                                <strong style="color: white; font-size: 1rem; display: block; margin-bottom: 4px;">VCT Media Day — Apr 15</strong>
                                <span style="color: var(--text-secondary); font-size: 0.85rem;">Location: Studio B · Wear new jerseys</span>
                            </div>
                            <span style="font-size: 0.75rem; background: rgba(139,92,246,0.2); color: #c4b5fd; padding: 3px 8px; border-radius: 4px; font-weight: bold;">Media</span>
                        </div>
                            <div>
                                <strong style="color: white; font-size: 1rem; display: block; margin-bottom: 4px;">Theory Room — Apr 17</strong>
                                <span style="color: var(--text-secondary); font-size: 0.85rem;">Review: vs FNC loss · Focus: Round sequencing</span>
                            </div>
                            <span style="font-size: 0.75rem; background: rgba(139,92,246,0.2); color: #c4b5fd; padding: 3px 8px; border-radius: 4px; font-weight: bold;">VOD</span>
                        </div>
                    </div>
                </div>

                <!-- Session Notes -->
                <div style="flex: 1; min-width: 300px; background: var(--bg-card); padding: 1.5rem; border-radius: 8px;">
                    <h3 style="color: var(--text-secondary); font-size: 0.85rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 15px;">Session Notes — VS KC</h3>
                    <div style="margin-bottom: 12px; display: flex; gap: 8px;">
                        <span style="font-size: 0.8rem; background: rgba(245, 158, 11, 0.15); color: #fbbf24; padding: 2px 8px; border-radius: 4px;">Ascent</span>
                        <span style="font-size: 0.8rem; background: rgba(59, 130, 246, 0.15); color: #93c5fd; padding: 2px 8px; border-radius: 4px;">Bind</span>
                    </div>
                    <p style="color: #8b97a3; font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
                        Focus on Ascent Mid control. Practice the new retake stagger timing (Omen smoke delay + Fade sensor). 
                        On Bind: test fast B off the break. Don't default to A short — it's their strength. IGL: read lurk patterns.
                    </p>
                    <div style="color: var(--text-secondary); font-size: 0.8rem; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 10px;">
                        Added by Coach Tinder · Apr 12
                    </div>
                </div>
            </div>

            <!-- Detailed Weekly Table -->
            <div class="stat-card" style="margin-bottom: 1rem; padding: 1.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <h3 style="color: var(--text-primary);">Detailed Weekly Schedule</h3>
                    <button style="background: var(--accent-red); color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; font-weight: bold;">+ Add Event</button>
                </div>
                
                <div style="overflow-x: auto; padding-bottom: 1rem;">
                    <table style="width: 100%; min-width: 900px; border-collapse: collapse; text-align: center; background: rgba(0,0,0,0.2); border-radius: 8px; overflow: hidden; font-family: 'Inter', sans-serif;">
                        <thead>
                            <tr style="background: var(--bg-card); color: var(--text-secondary); font-size: 0.85rem;">
                                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.05);">TIME</th>
                                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.05);">MON</th>
                                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.05);">TUE</th>
                                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.05);">WED</th>
                                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.05);">THU</th>
                                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.05);">FRI</th>
                                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.05);">SAT</th>
                                <th style="padding: 12px; border: 1px solid rgba(255,255,255,0.05);">SUN</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- 11:00 - 12:00 -->
                            <tr>
                                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); font-size: 0.8rem; white-space: nowrap;">11:00 - 12:00</td>
                                <td style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem;">Theory (Reading)</td>
                                <td style="background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem;">VOD Review</td>
                                <td style="background: rgba(139, 92, 246, 0.15); color: #c4b5fd; border: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem;">Custom Server</td>
                                <td style="background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem;">Review & Feedback</td>
                                <td style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem;">Theory & VOD</td>
                                <td style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem;">Final Objectives Talk</td>
                                <td rowspan="8" style="background: rgba(239, 68, 68, 0.1); color: var(--danger); font-weight: bold; font-size: 1.2rem; writing-mode: vertical-rl; transform: rotate(180deg); border: 1px solid rgba(255,255,255,0.05); letter-spacing: 5px;">DAY OFF</td>
                            </tr>
                            <!-- 12:00 - 13:00 -->
                            <tr>
                                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); font-size: 0.8rem; white-space: nowrap;">12:00 - 13:00</td>
                                <td style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem;">Deep Theory</td>
                                <td style="background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem;">VOD Feedback</td>
                                <td style="background: rgba(139, 92, 246, 0.15); color: #c4b5fd; border: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem;">Map Updates</td>
                                <td style="background: rgba(16, 185, 129, 0.15); color: #6ee7b7; border: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem;">Pre-scrim Talk</td>
                                <td style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(255,255,255,0.05); font-size: 0.85rem;">Tactical Talk</td>
                                <td style="background: transparent; border: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); font-size: 0.85rem;">Rest</td>
                            </tr>
                            <!-- 13:00 - 14:00 -->
                            <tr>
                                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); font-size: 0.8rem; white-space: nowrap;">13:00 - 14:00</td>
                                <td colspan="6" style="border: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary);">Lunch</td>
                            </tr>
                            <!-- 14:00 - 17:00 -->
                            <tr>
                                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); font-size: 0.8rem; white-space: nowrap;">14:00 - 17:00</td>
                                <td style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.05); padding: 15px 5px; line-height: 1.4;">vs NAVI / BBL<br><span style="font-size:0.75rem; color:#fff; font-weight:bold;">Haven Only</span></td>
                                <td style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.05); padding: 15px 5px; line-height: 1.4;">vs Liquid / KC<br><span style="font-size:0.75rem; color:#fff; font-weight:bold;">Ascent Only</span></td>
                                <td style="background: rgba(16, 185, 129, 0.15); border-left: 3px solid #10b981; color: #6ee7b7; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); padding: 15px 5px; font-weight: bold; line-height: 1.4;">TEAM BONDING<br><span style="font-size:0.75rem; font-weight: normal;">Escape Room</span></td>
                                <td style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.05); padding: 15px 5px; line-height: 1.4;">vs FNC<br><span style="font-size:0.7rem; color:#fff; font-weight:bold;">Bind, Split, Lotus</span></td>
                                <td style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.05); padding: 15px 5px; line-height: 1.4;">vs KC<br><span style="font-size:0.7rem; color:#fff; font-weight:bold;">Ascent, Bind, Split</span></td>
                                <td style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.05); padding: 15px 5px; line-height: 1.4;">vs Liquid<br><span style="font-size:0.7rem; color:#fff; font-weight:bold;">Haven, Ascent, Sunset</span></td>
                            </tr>
                            <!-- 17:00 - 19:00 -->
                            <tr>
                                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); font-size: 0.8rem; white-space: nowrap;">17:00 - 19:00</td>
                                <td colspan="6" style="background: rgba(236, 72, 153, 0.15); color: #f9a8d4; border: 1px solid rgba(255,255,255,0.05); font-weight: 500;">Gym & Personal Break</td>
                            </tr>
                            <!-- 19:00 - 20:00 -->
                            <tr>
                                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); font-size: 0.8rem; white-space: nowrap;">19:00 - 20:00</td>
                                <td colspan="6" style="border: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary);">Dinner</td>
                            </tr>
                            <!-- 20:00 - 22:00 -->
                            <tr>
                                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); font-size: 0.8rem; white-space: nowrap;">20:00 - 22:00</td>
                                <td style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.05); padding: 15px 5px; line-height: 1.4;">vs TH<br><span style="font-size:0.75rem; color:#fff; font-weight:bold;">Haven Only</span></td>
                                <td style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.05); padding: 15px 5px; line-height: 1.4;">vs GX<br><span style="font-size:0.75rem; color:#fff; font-weight:bold;">Ascent Only</span></td>
                                <td style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.05); padding: 15px 5px; line-height: 1.4;">vs VIT<br><span style="font-size:0.75rem; color:#fff; font-weight:bold;">Sunset Only</span></td>
                                <td style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.05); padding: 15px 5px; line-height: 1.4;">vs FUT<br><span style="font-size:0.75rem; color:#fff; font-weight:bold;">Sunset, Haven</span></td>
                                <td style="background: rgba(59, 130, 246, 0.15); color: #93c5fd; border: 1px solid rgba(255,255,255,0.05); padding: 15px 5px; line-height: 1.4;">vs KOI<br><span style="font-size:0.75rem; color:#fff; font-weight:bold;">Lotus, Sunset</span></td>
                                <td style="background: rgba(139, 92, 246, 0.2); border-left: 3px solid #8b5cf6; color: #c4b5fd; border-bottom: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); padding: 15px 5px; font-weight: bold; line-height: 1.4;">INDIVIDUAL<br><span style="font-size:0.75rem; font-weight: normal;">Ranked Play</span></td>
                            </tr>
                            <!-- 22:00 - 00:00 -->
                            <tr>
                                <td style="padding: 10px; border: 1px solid rgba(255,255,255,0.05); color: var(--text-secondary); font-size: 0.8rem; white-space: nowrap;">22:00 - 00:00</td>
                                <td colspan="4" style="background: rgba(139, 92, 246, 0.15); color: #c4b5fd; border: 1px solid rgba(255,255,255,0.05); font-weight: 500;">Individual Stream / Ranked</td>
                                <td colspan="2" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(255,255,255,0.05); font-weight: 500;">Late Feedback / VODs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `
    },
    playbook: {
        title: "Tactical Playbook",
        desc: "Map strategies, executions, and theory.",
        render: () => `
            <div style="display: flex; flex-direction: column; gap: 2rem;">
                <!-- BIND -->
                <div style="background: var(--bg-card); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); overflow: hidden; position: relative; cursor: pointer; transition: 0.2s;" onclick="openGameplanModal()" onmouseover="this.style.borderColor='rgba(255,255,255,0.2)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.05)'">
                    <div id="new-doc-tag" style="position: absolute; top: 15px; right: 20px; background: var(--accent-red); color: white; font-size: 0.75rem; font-weight: bold; padding: 4px 10px; border-radius: 12px; box-shadow: 0 4px 10px rgba(255,70,85,0.4); animation: pulse 2s infinite; pointer-events: none;">NEW UPDATE</div>
                    
                    <div style="padding: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: flex-start; background: rgba(0,0,0,0.2);">
                        <div>
                            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                                <i class="fa-solid fa-map-location-dot" style="color: var(--accent-red); font-size: 1.5rem;"></i>
                                <h3 style="color: white; margin: 0; font-size: 1.5rem;">Bind</h3>
                                <div style="display: flex; align-items: center; gap: 6px; background: rgba(88, 101, 242, 0.15); padding: 4px 8px; border-radius: 4px; margin-left: 10px;">
                                    <i class="fa-brands fa-discord" style="color: #5865F2; font-size: 0.8rem;"></i>
                                    <span style="color: #5865F2; font-size: 0.7rem; font-weight: bold;">Synced: #bind-strats</span>
                                </div>
                            </div>
                            <!-- COMPOSITION -->
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #f87171; border: 1px solid rgba(248,113,113,0.3);">RAZE</div>
                                <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #60a5fa; border: 1px solid rgba(96,165,250,0.3);">SKYE</div>
                                <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #4ade80; border: 1px solid rgba(74,222,128,0.3);">VIPER</div>
                                <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #c084fc; border: 1px solid rgba(192,132,252,0.3);">BRIMSTONE</div>
                                <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #facc15; border: 1px solid rgba(250,204,21,0.3);">CYPHER</div>
                            </div>
                        </div>
                        <button style="background: transparent; border: 1px solid var(--accent-red); color: var(--accent-red); padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold; margin-top: 5px;">View Gameplan</button>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1px; background: rgba(255,255,255,0.05);">
                        <!-- T SIDE -->
                        <div style="background: var(--bg-card); padding: 1.5rem;">
                            <h4 style="color: #f87171; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-khanda"></i> ATTACK (T-Side)</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-file-lines" style="color: #94a3b8; margin-right: 5px;"></i> Defaults (3)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-bolt" style="color: #fbbf24; margin-right: 5px;"></i> Executes (5)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-bomb" style="color: #f87171; margin-right: 5px;"></i> Post-Plants (4)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-crosshairs" style="color: #60a5fa; margin-right: 5px;"></i> Pistols (2)</span>
                            </div>
                        </div>
                        <!-- CT SIDE -->
                        <div style="background: var(--bg-card); padding: 1.5rem;">
                            <h4 style="color: #60a5fa; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-shield-halved"></i> DEFENSE (CT-Side)</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-file-lines" style="color: #94a3b8; margin-right: 5px;"></i> Defaults (2)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-rotate-left" style="color: #4ade80; margin-right: 5px;"></i> Retakes (4)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-crosshairs" style="color: #60a5fa; margin-right: 5px;"></i> Pistols (2)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-eye-slash" style="color: #c084fc; margin-right: 5px;"></i> Anti-Ecos (1)</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- HAVEN -->
                <div style="background: var(--bg-card); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); overflow: hidden; cursor: pointer; transition: 0.2s;" onmouseover="this.style.borderColor='rgba(255,255,255,0.2)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.05)'" onclick="openGameplanModal()">
                    <div style="padding: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: flex-start; background: rgba(0,0,0,0.2);">
                        <div>
                            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                                <i class="fa-solid fa-map" style="color: #00bcd4; font-size: 1.5rem;"></i>
                                <h3 style="color: white; margin: 0; font-size: 1.5rem;">Haven</h3>
                                <div style="display: flex; align-items: center; gap: 6px; background: rgba(88, 101, 242, 0.15); padding: 4px 8px; border-radius: 4px; margin-left: 10px;">
                                    <i class="fa-brands fa-discord" style="color: #5865F2; font-size: 0.8rem;"></i>
                                    <span style="color: #5865F2; font-size: 0.7rem; font-weight: bold;">Synced: #haven-strats</span>
                                </div>
                            </div>
                            <!-- COMPOSITIONS -->
                            <div style="display: flex; flex-direction: column; gap: 8px;">
                                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                    <span style="color: var(--text-secondary); font-size: 0.8rem; margin-right: 5px; align-self: center;">Comp A:</span>
                                    <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #f87171; border: 1px solid rgba(248,113,113,0.3);">JETT</div>
                                    <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #60a5fa; border: 1px solid rgba(96,165,250,0.3);">SOVA</div>
                                    <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #c084fc; border: 1px solid rgba(192,132,252,0.3);">OMEN</div>
                                    <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #facc15; border: 1px solid rgba(250,204,21,0.3);">KILLJOY</div>
                                    <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #60a5fa; border: 1px solid rgba(96,165,250,0.3);">BREACH</div>
                                </div>
                                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                    <span style="color: var(--text-secondary); font-size: 0.8rem; margin-right: 5px; align-self: center;">Comp B:</span>
                                    <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #f87171; border: 1px solid rgba(248,113,113,0.3);">NEON</div>
                                    <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #60a5fa; border: 1px solid rgba(96,165,250,0.3);">FADE</div>
                                    <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #c084fc; border: 1px solid rgba(192,132,252,0.3);">OMEN</div>
                                    <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #4ade80; border: 1px solid rgba(74,222,128,0.3);">VIPER</div>
                                    <div style="background: #1e293b; padding: 4px 10px; border-radius: 20px; font-size: 0.7rem; font-weight: bold; color: #facc15; border: 1px solid rgba(250,204,21,0.3);">CYPHER</div>
                                </div>
                            </div>
                        </div>
                        <button style="background: transparent; border: 1px solid #00bcd4; color: #00bcd4; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold; margin-top: 5px;">View Gameplan</button>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1px; background: rgba(255,255,255,0.05);">
                        <!-- T SIDE -->
                        <div style="background: var(--bg-card); padding: 1.5rem;">
                            <h4 style="color: #f87171; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-khanda"></i> ATTACK (T-Side)</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-file-lines" style="color: #94a3b8; margin-right: 5px;"></i> Defaults (4)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-bolt" style="color: #fbbf24; margin-right: 5px;"></i> Executes (6)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-bomb" style="color: #f87171; margin-right: 5px;"></i> Post-Plants (3)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-crosshairs" style="color: #60a5fa; margin-right: 5px;"></i> Pistols (2)</span>
                            </div>
                        </div>
                        <!-- CT SIDE -->
                        <div style="background: var(--bg-card); padding: 1.5rem;">
                            <h4 style="color: #60a5fa; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-shield-halved"></i> DEFENSE (CT-Side)</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-file-lines" style="color: #94a3b8; margin-right: 5px;"></i> Defaults (3)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-rotate-left" style="color: #4ade80; margin-right: 5px;"></i> Retakes (5)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-crosshairs" style="color: #60a5fa; margin-right: 5px;"></i> Pistols (1)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }
            </style>
        `
    },
    vods: {
        title: "VOD Review",
        desc: "Match recordings, positives, and timeline feedback.",
        render: () => `
            <div class="dashboard-grid">
                ${mockVods.map(v => `
                    <div class="stat-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
                        <!-- Video Thumbnail -->
                        <div style="height: 170px; background: #111; display: flex; justify-content: center; align-items: center; position: relative; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <i class="fa-solid fa-play" style="font-size: 3rem; color: rgba(255,255,255,0.4); transition: 0.2s;"></i>
                            <span style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.8); padding: 3px 8px; font-size: 0.75rem; border-radius: 4px;">45:20</span>
                        </div>
                        
                        <!-- Video Info -->
                        <div style="padding: 1.2rem;">
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                                <h4 style="color: var(--text-primary); font-size: 1.1rem; margin: 0;">vs ${v.opponent} (${v.map})</h4>
                                <span style="font-weight: bold; font-size: 0.9rem; color: ${v.result.includes('Win') ? 'var(--success)' : 'var(--danger)'};">${v.result}</span>
                            </div>
                            
                            <div style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 15px; display: flex; gap: 15px; flex-wrap: wrap;">
                                <span><i class="fa-regular fa-calendar"></i> ${v.date}</span>
                                <span><i class="fa-solid fa-crosshairs" style="color: var(--accent-red);"></i> ${v.issue}</span>
                            </div>

                            <!-- Native HTML Accordion for Feedback -->
                            <details style="background: rgba(0,0,0,0.2); border-radius: 6px; padding: 10px 12px; font-size: 0.85rem; cursor: pointer; outline: none; transition: 0.2s;">
                                <summary style="color: var(--text-primary); font-weight: 500; outline: none; user-select: none;">
                                    <i class="fa-solid fa-comment-dots" style="color: #60a5fa; margin-right: 5px;"></i> View Feedback & Notes
                                </summary>
                                <div style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed rgba(255,255,255,0.1); display: flex; flex-direction: column; gap: 10px; cursor: default;">
                                    <div>
                                        <strong style="color: var(--success);"><i class="fa-solid fa-arrow-trend-up"></i> Positives:</strong>
                                        <span style="color: var(--text-secondary); display: block; margin-top: 2px;">${v.positives}</span>
                                    </div>
                                    <div>
                                        <strong style="color: #fcd34d;"><i class="fa-solid fa-user-tie"></i> Coach Note:</strong>
                                        <span style="color: var(--text-secondary); display: block; margin-top: 2px;">${v.coachNote}</span>
                                    </div>
                                    <div>
                                        <strong style="color: #c4b5fd;"><i class="fa-solid fa-gamepad"></i> Player Note:</strong>
                                        <span style="color: var(--text-secondary); display: block; margin-top: 2px;">${v.playerNote}</span>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                `).join('')}
            </div>
        `
    },
    coach: {
        title: "Coach Panel",
        desc: "Private player evaluations and holistic feedback.",
        render: () => `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                ${players.map(p => `
                    <div style="background: rgba(30, 41, 59, 0.4); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 1.5rem; display: flex; flex-direction: column;">
                        <!-- Header -->
                        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid rgba(255,255,255,0.05);">
                            <div style="width: 48px; height: 48px; border-radius: 8px; background: ${p.color}33; color: ${p.color}; display: flex; justify-content: center; align-items: center; font-weight: bold; font-size: 1.2rem;">
                                ${p.initials}
                            </div>
                            <div>
                                <h4 style="color: white; font-size: 1.2rem; margin: 0; letter-spacing: 0.5px;">${p.name}</h4>
                                <span style="color: var(--text-secondary); font-size: 0.85rem;">${p.role} · ${p.main}</span>
                            </div>
                        </div>

                        <!-- Feedback Sections -->
                        <div style="display: flex; flex-direction: column; gap: 1.2rem; flex: 1;">
                            
                            <div>
                                <div style="display: flex; align-items: center; gap: 6px; color: #60a5fa; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; font-weight: bold;">
                                    <i class="fa-solid fa-chart-line"></i> Performance Trend
                                </div>
                                <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; margin: 0;">${p.recentPerformance}</p>
                            </div>

                            <div>
                                <div style="display: flex; align-items: center; gap: 6px; color: #fcd34d; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; font-weight: bold;">
                                    <i class="fa-solid fa-hammer"></i> Tactical Focus
                                </div>
                                <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; margin: 0;">${p.areasOfImprovement}</p>
                            </div>

                            <div>
                                <div style="display: flex; align-items: center; gap: 6px; color: #f472b6; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; font-weight: bold;">
                                    <i class="fa-solid fa-heart-pulse"></i> Human & Mental
                                </div>
                                <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; margin: 0;">${p.mentalAndPersonal}</p>
                            </div>

                        </div>

                        <!-- Action Plan -->
                        <div style="margin-top: 1.5rem; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 6px; padding: 12px;">
                            <div style="color: var(--text-secondary); font-size: 0.7rem; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 6px; font-weight: bold;">Next Action Plan</div>
                            <p style="color: #94a3b8; font-size: 0.85rem; line-height: 1.5; margin: 0;">${p.actionPlan}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `
    }
};

// --- Translations for the App ---
const appTranslations = {
    en: {
        nav_dashboard: "Performance Dashboard",
        nav_goals: "Goals & Progress",
        nav_scrims: "Calendar",
        nav_playbook: "Tactical Playbook",
        nav_vods: "VOD Review",
        nav_coach: "Coach Panel",
        title_dashboard: "Performance Dashboard",
        desc_dashboard: "Analyzing recent scrims and official matches data.",
        title_goals: "Goals & Progress",
        desc_goals: "Track weekly objectives and player improvements.",
        title_scrims: "Calendar",
        desc_scrims: "Comprehensive monthly calendar and detailed weekly timeline.",
        title_playbook: "Tactical Playbook",
        desc_playbook: "Map strategies, executions, and theory.",
        title_vods: "VOD Review",
        desc_vods: "Match recordings, positives, and timeline feedback.",
        title_coach: "Coach Panel",
        desc_coach: "Private player evaluations and holistic feedback.",
        toast_title: "NEW GAMEPLAN",
        toast_msg: "Guys, tomorrow we start with Bind/Haven. I have the gameplan ready for you to review. Let me know if you have any questions.",
        toast_btn: "Open Tactical Playbook",
        media_day: "Reminder: Tuesday is Media Day for VCT! New jerseys and Logitech sponsor videos. Please be ready."
    },
    jp: {
        nav_dashboard: "パフォーマンスダッシュボード",
        nav_goals: "目標と進捗",
        nav_scrims: "カレンダー",
        nav_playbook: "戦術プレイブック",
        nav_vods: "VODレビュー",
        nav_coach: "コーチパネル",
        title_dashboard: "パフォーマンスダッシュボード",
        desc_dashboard: "最近のスクリムと公式試合のデータを分析します。",
        title_goals: "目標と進捗",
        desc_goals: "週の目標とプレイヤーの改善を追跡します。",
        title_scrims: "カレンダー",
        desc_scrims: "包括的な月間カレンダーと詳細な週間タイムライン。",
        title_playbook: "戦術プレイブック",
        desc_playbook: "マップ戦略、実行、および理論。",
        title_vods: "VODレビュー",
        desc_vods: "試合の録画、ポジティブな点、タイムラインのフィードバック。",
        title_coach: "コーチパネル",
        desc_coach: "プライベートなプレイヤー評価とフィードバック。",
        toast_title: "新しいゲームプラン",
        toast_msg: "皆さん、明日はBind/Havenから始めます。レビュー用のゲームプランの準備ができています。質問があれば教えてください。",
        toast_btn: "戦術プレイブックを開く",
        media_day: "リマインダー：火曜日はVCTのメディアデーです！新しいジャージとLogitechスポンサーのビデオ撮影があります。準備をお願いします。"
    },
    zh: {
        nav_dashboard: "表现仪表板",
        nav_goals: "目标与进度",
        nav_scrims: "日历",
        nav_playbook: "战术手册",
        nav_vods: "VOD 回放",
        nav_coach: "教练面板",
        title_dashboard: "表现仪表板",
        desc_dashboard: "分析最近的训练赛和正式比赛数据。",
        title_goals: "目标与进度",
        desc_goals: "跟踪每周目标和玩家进步。",
        title_scrims: "日历",
        desc_scrims: "全面的月度日历和详细的每周时间表。",
        title_playbook: "战术手册",
        desc_playbook: "地图策略、执行和理论。",
        title_vods: "VOD 回放",
        desc_vods: "比赛录像、积极因素和时间线反馈。",
        title_coach: "教练面板",
        desc_coach: "私人球员评估和反馈。",
        toast_title: "新战术计划",
        toast_msg: "大家注意，明天我们从 Bind/Haven 开始。我已经准备好了战术计划供大家查阅。如果有任何疑问请告诉我。",
        toast_btn: "打开战术手册",
        media_day: "提醒：周二是 VCT 的媒体日！将有新队服和罗技赞助商视频拍摄。请做好准备。"
    },
    ko: {
        nav_dashboard: "성과 대시보드",
        nav_goals: "목표 및 진행 상황",
        nav_scrims: "캘린더",
        nav_playbook: "전술 플레이북",
        nav_vods: "VOD 리뷰",
        nav_coach: "코치 패널",
        title_dashboard: "성과 대시보드",
        desc_dashboard: "최근 스크림 및 공식 경기 데이터를 분석합니다.",
        title_goals: "목표 및 진행 상황",
        desc_goals: "주간 목표 및 플레이어 개선 사항을 추적합니다.",
        title_scrims: "캘린더",
        desc_scrims: "포괄적인 월간 캘린더 및 상세한 주간 타임라인.",
        title_playbook: "전술 플레이북",
        desc_playbook: "맵 전략, 실행 및 이론.",
        title_vods: "VOD 리뷰",
        desc_vods: "경기 녹화, 긍정적인 요소 및 타임라인 피드백.",
        title_coach: "코치 패널",
        desc_coach: "비공개 플레이어 평가 및 피드백.",
        toast_title: "새로운 게임 플랜",
        toast_msg: "여러분, 내일은 Bind/Haven으로 시작합니다. 리뷰할 게임 플랜이 준비되어 있습니다. 질문이 있으시면 언제든 말씀해주세요.",
        toast_btn: "전술 플레이북 열기",
        media_day: "알림: 화요일은 VCT 미디어 데이입니다! 새로운 유니폼과 로지텍 스폰서 비디오 촬영이 있습니다. 준비해 주세요."
    }
};

let currentLang = 'en';

function setAppLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (appTranslations[lang] && appTranslations[lang][key]) {
            el.innerHTML = appTranslations[lang][key];
        }
    });

    const toastTitle = document.getElementById('toast-title-text');
    if (toastTitle && appTranslations[lang].toast_title) toastTitle.textContent = appTranslations[lang].toast_title;
    const toastMsg = document.getElementById('toast-msg-text');
    if (toastMsg && appTranslations[lang].toast_msg) toastMsg.textContent = appTranslations[lang].toast_msg;
    const toastBtn = document.getElementById('toast-btn');
    if (toastBtn && appTranslations[lang].toast_btn) toastBtn.textContent = appTranslations[lang].toast_btn;

    // Re-render current view to update title/desc dynamically
    const activeItem = document.querySelector('.nav-item.active');
    if(activeItem) {
        const target = activeItem.getAttribute('data-target');
        renderView(target, false); // false to avoid animation spam on lang change
    }
}

// --- Logic for handling navigation ---
let currentViewTarget = 'dashboard';

function renderView(viewId, animate = true) {
    const viewData = viewsData[viewId];
    const pageTitle = document.getElementById('page-title');
    const pageDesc = document.getElementById('page-desc');
    const contentArea = document.getElementById('content-area');
    currentViewTarget = viewId;

    if (viewData) {
        if(animate) contentArea.style.opacity = 0;
        
        setTimeout(() => {
            pageTitle.textContent = appTranslations[currentLang]['title_' + viewId] || viewData.title;
            pageDesc.textContent = appTranslations[currentLang]['desc_' + viewId] || viewData.desc;
            contentArea.innerHTML = viewData.render();
            if(animate) contentArea.style.opacity = 1;
        }, animate ? 150 : 0);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const contentArea = document.getElementById('content-area');
    contentArea.style.transition = "opacity 0.2s ease-in-out";

    // Handle URL param for languages
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && appTranslations[langParam]) {
        currentLang = langParam;
        const langSwitch = document.getElementById('lang-switch');
        if(langSwitch) langSwitch.value = langParam;
        
        // Translate sidebar immediately
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (appTranslations[langParam] && appTranslations[langParam][key]) {
                el.innerHTML = appTranslations[langParam][key];
            }
        });
    }

    // Initial Render
    renderView('dashboard');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            const target = item.getAttribute('data-target');

            // Remove notification badge if clicked on playbook
            if(target === 'playbook') {
                const badge = document.getElementById('playbook-badge');
                if(badge) badge.remove();
            }

            renderView(target);
        });
    });

    // Language Switcher Event
    const langSwitch = document.getElementById('lang-switch');
    if(langSwitch) {
        langSwitch.addEventListener('change', (e) => {
            setAppLanguage(e.target.value);
        });
    }

    // --- Interactive Notification Toast System ---
    const notificationHTML = `
        <div id="toast-notification-media" style="position: fixed; bottom: -300px; right: 20px; background: rgba(15, 25, 35, 0.95); border-left: 4px solid #8b5cf6; padding: 1.2rem; border-radius: 6px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); display: flex; gap: 15px; align-items: flex-start; width: 350px; transition: bottom 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 1000; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.05);">
            <div style="background: rgba(139, 92, 246, 0.2); width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; flex-shrink: 0;">
                <i class="fa-solid fa-camera-retro" style="color: #c4b5fd; font-size: 1.2rem;"></i>
            </div>
            <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <strong style="color: white; font-size: 0.95rem;">Manager Announcement</strong>
                    <span style="color: #c4b5fd; font-size: 0.75rem; font-weight: bold; background: rgba(139,92,246,0.1); padding: 2px 6px; border-radius: 4px;">Event</span>
                </div>
                <p style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.4; margin: 0;">
                    <span id="toast-media-text" data-i18n="media_day">${appTranslations[currentLang].media_day}</span>
                </p>
            </div>
            <i class="fa-solid fa-xmark" id="toast-close-media" style="color: var(--text-secondary); cursor: pointer; position: absolute; top: 10px; right: 10px; transition: 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'"></i>
        </div>

        <div id="toast-notification" style="position: fixed; bottom: -300px; right: 20px; background: rgba(15, 25, 35, 0.95); border-left: 4px solid var(--accent-red); padding: 1.2rem; border-radius: 6px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); display: flex; gap: 15px; align-items: flex-start; width: 350px; transition: bottom 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275); z-index: 1000; backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.05);">
            <div style="background: rgba(255, 70, 85, 0.2); width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; flex-shrink: 0;">
                <i class="fa-solid fa-bell" style="color: var(--accent-red); font-size: 1.2rem;"></i>
            </div>
            <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <strong style="color: white; font-size: 0.95rem;" id="toast-title-text" data-i18n="toast_title">${appTranslations[currentLang].toast_title}</strong>
                    <span style="color: var(--accent-red); font-size: 0.75rem; font-weight: bold; background: rgba(255,70,85,0.1); padding: 2px 6px; border-radius: 4px;">Important</span>
                </div>
                <p style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.4; margin: 0 0 12px 0;">
                    <strong style="color: white;">Coach Tinder:</strong> <span id="toast-msg-text" data-i18n="toast_msg">${appTranslations[currentLang].toast_msg}</span>
                </p>
                <button id="toast-btn" data-i18n="toast_btn" style="background: var(--accent-red); color: white; border: none; padding: 8px 12px; border-radius: 4px; font-size: 0.85rem; cursor: pointer; font-weight: bold; width: 100%; transition: 0.2s;">
                    ${appTranslations[currentLang].toast_btn}
                </button>
            </div>
            <i class="fa-solid fa-xmark" id="toast-close" style="color: var(--text-secondary); cursor: pointer; position: absolute; top: 10px; right: 10px; transition: 0.2s;" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'"></i>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', notificationHTML);

    const toast = document.getElementById('toast-notification');
    const toastBtn = document.getElementById('toast-btn');
    const toastClose = document.getElementById('toast-close');
    
    const toastMedia = document.getElementById('toast-notification-media');
    const toastCloseMedia = document.getElementById('toast-close-media');

    // Pop up the notification after the user enters the app
    setTimeout(() => {
        toast.style.bottom = "20px";
        toastMedia.style.bottom = "220px"; // Slide above the first toast
        
        // Add badge to Playbook nav item if not currently in playbook
        const playbookNavItem = document.querySelector('[data-target="playbook"]');
        if(playbookNavItem && currentViewTarget !== 'playbook') {
            const badge = document.createElement('span');
            badge.id = "playbook-badge";
            badge.textContent = "1";
            badge.style.cssText = "background: var(--accent-red); color: white; border-radius: 50%; font-size: 0.7rem; font-weight: bold; width: 18px; height: 18px; display: flex; justify-content: center; align-items: center; margin-left: auto;";
            playbookNavItem.appendChild(badge);
        }
    }, 1500);

    toastBtn.addEventListener('click', () => {
        toast.style.bottom = "-300px"; // Hide toast
        const playbookNavItem = document.querySelector('[data-target="playbook"]');
        if(playbookNavItem) playbookNavItem.click();
    });

    toastClose.addEventListener('click', () => {
        toast.style.bottom = "-300px";
    });
    
    toastCloseMedia.addEventListener('click', () => {
        toastMedia.style.bottom = "-300px";
    });
});

window.openGameplanModal = function() {
    // Hide NEW DOC pulse tag
    const newDocTag = document.getElementById('new-doc-tag');
    if(newDocTag) newDocTag.style.display = 'none';

    // Create modal
    const modalHTML = `
        <div id="gameplan-modal" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.85); z-index: 2000; display: flex; justify-content: center; align-items: center; backdrop-filter: blur(8px);">
            <div style="background: var(--bg-card); width: 85%; max-width: 950px; height: 85vh; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
                <div style="padding: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.2);">
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <div style="width: 40px; height: 40px; background: rgba(255, 70, 85, 0.2); border-radius: 8px; display: flex; justify-content: center; align-items: center;">
                            <i class="fa-solid fa-file-pdf" style="color: var(--accent-red); font-size: 1.2rem;"></i>
                        </div>
                        <div>
                            <h3 style="color: white; margin: 0; font-size: 1.3rem;">Bind & Haven Gameplan</h3>
                            <div style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 3px;">Tactical Playbook • Prepared by Coach Tinder</div>
                        </div>
                    </div>
                    <i class="fa-solid fa-xmark" style="color: var(--text-secondary); font-size: 1.5rem; cursor: pointer; transition: 0.2s;" onclick="document.getElementById('gameplan-modal').remove()" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'"></i>
                </div>
                
                <div style="flex: 1; padding: 2.5rem; overflow-y: auto; color: #cbd5e1; font-family: 'Inter', sans-serif; line-height: 1.7;">
                    
                    <!-- BIND SECTION -->
                    <div style="margin-bottom: 3rem;">
                        <h2 style="color: white; border-bottom: 2px solid var(--accent-red); padding-bottom: 10px; display: inline-block; margin-bottom: 1.5rem;"><i class="fa-solid fa-map-location-dot" style="margin-right: 10px; color: var(--accent-red);"></i>Bind: Default & Control</h2>
                        
                        <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; border-left: 3px solid #60a5fa;">
                            <h4 style="color: white; margin: 0 0 10px 0;">A-Short Conditionings & U-Hall Control</h4>
                            <p style="margin: 0;">We are struggling with taking A Short control and dying to early aggression. From now on, <strong>musashi (Sova)</strong> will start A long and use the recon bolt over the teleporter roof to scan U-hall. This prevents the early peek and forces their defense to react. <strong>wolverine (Omen)</strong>, you must smoke Heaven earlier; the current delay is allowing their OP to take a free shot before retreating.</p>
                        </div>
                        
                        <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 1.5rem; border-left: 3px solid #fcd34d;">
                            <h4 style="color: white; margin: 0 0 10px 0;">B-Long Exec Fundamentals</h4>
                            <p style="margin: 0;">Stop dry-peeking Hookah. We will run a 3-2 split where Viper holds B Long with a slow wall, while our entry package waits for the Skye dog clear inside Hookah. Patience is key here.</p>
                        </div>
                    </div>

                    <!-- HAVEN SECTION -->
                    <div>
                        <h2 style="color: white; border-bottom: 2px solid #00bcd4; padding-bottom: 10px; display: inline-block; margin-bottom: 1.5rem;"><i class="fa-solid fa-map" style="margin-right: 10px; color: #00bcd4;"></i>Haven: Comp Variations & Fundamentals</h2>
                        <p style="margin-bottom: 2rem;">For this macro-cycle, we'll be running <strong>two different comps</strong> on Haven that we locked in during yesterday's theory review. Both are designed to exploit different pacing and tempos.</p>

                        <!-- COMPS -->
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; margin-bottom: 2.5rem;">
                            
                            <!-- COMP A -->
                            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 1.5rem;">
                                <h4 style="color: white; margin: 0 0 15px 0; display: flex; align-items: center; justify-content: space-between;">
                                    Comp A: Standard Default <span style="background: rgba(59, 130, 246, 0.2); color: #93c5fd; padding: 3px 8px; border-radius: 4px; font-size: 0.7rem;">Control & Info</span>
                                </h4>
                                <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 15px;">
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #f87171; border: 1px solid rgba(248,113,113,0.3);">JETT</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #60a5fa; border: 1px solid rgba(96,165,250,0.3);">SOVA</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #c084fc; border: 1px solid rgba(192,132,252,0.3);">OMEN</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #facc15; border: 1px solid rgba(250,204,21,0.3);">KILLJOY</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #60a5fa; border: 1px solid rgba(96,165,250,0.3);">BREACH</div>
                                </div>
                                <ul style="padding-left: 20px; margin: 0; font-size: 0.85rem; color: #94a3b8; line-height: 1.5;">
                                    <li style="margin-bottom: 6px;"><strong style="color: white;">Fundamentals:</strong> Passive map control, heavy info denial with KJ setups.</li>
                                    <li style="margin-bottom: 6px;"><strong style="color: white;">CT Positioning:</strong> Jett OP flexes A/C. KJ hard anchors Garage. Omen anchors C.</li>
                                    <li><strong style="color: white;">T-Side Defaults:</strong> A Lobby take with Breach stun + Sova drone clear.</li>
                                </ul>
                            </div>

                            <!-- COMP B -->
                            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 1.5rem;">
                                <h4 style="color: white; margin: 0 0 15px 0; display: flex; align-items: center; justify-content: space-between;">
                                    Comp B: Double Controller <span style="background: rgba(248, 113, 113, 0.2); color: #fca5a5; padding: 3px 8px; border-radius: 4px; font-size: 0.7rem;">Aggressive</span>
                                </h4>
                                <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 15px;">
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #f87171; border: 1px solid rgba(248,113,113,0.3);">NEON</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #60a5fa; border: 1px solid rgba(96,165,250,0.3);">FADE</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #c084fc; border: 1px solid rgba(192,132,252,0.3);">OMEN</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #4ade80; border: 1px solid rgba(74,222,128,0.3);">VIPER</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #facc15; border: 1px solid rgba(250,204,21,0.3);">CYPHER</div>
                                </div>
                                <ul style="padding-left: 20px; margin: 0; font-size: 0.85rem; color: #94a3b8; line-height: 1.5;">
                                    <li style="margin-bottom: 6px;"><strong style="color: white;">Fundamentals:</strong> Fast execs, total LOS denial (Viper Wall).</li>
                                    <li style="margin-bottom: 6px;"><strong style="color: white;">CT Positioning:</strong> Cypher anchors C. Viper walls Mid. Neon plays free rotator.</li>
                                    <li><strong style="color: white;">T-Side Defaults:</strong> B bursts with Viper orb and Neon Fast-lane.</li>
                                </ul>
                            </div>
                            
                        </div>

                        <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; border-left: 3px solid #f87171;">
                            <h4 style="color: white; margin: 0 0 10px 0;">Garage Control & Retake Protocol</h4>
                            <p style="margin: 0;">Stop dry-peeking Garage on defense. Set your alarmbot/trapwires deeper in mid doors, and play for retake if they break it fast. Over-peeking Garage is costing us first blood 40% of the time. Let's play our numbers advantage for retakes (our C/Garage retake winrate is 68% when playing 5v5).</p>
                        </div>
                    </div>
                    
                    <div style="margin-top: 3.5rem; background: rgba(255, 70, 85, 0.1); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-red); display: flex; align-items: flex-start; gap: 15px;">
                        <i class="fa-solid fa-circle-exclamation" style="color: var(--accent-red); font-size: 1.5rem; margin-top: 2px;"></i>
                        <div>
                            <strong style="color: white; display: block; margin-bottom: 5px;">Coach Note for Tomorrow:</strong> 
                            We will practice these setups extensively in tomorrow's server time before the Karmine Corp scrim. Please read and internalize your specific agent role for both comps. If you're unsure about your pathing in Comp B, DM me.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
};
