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

const getPlayers = () => [
    { 
      name: "jannyxD", role: "Duelist", main: "Raze / Jett", initials: "JX", color: "#60a5fa",
      recentPerformance: t('jx_perf', "Has been consistently creating strong entry space during the last 5 scrims. Entry timing with initiator flashes has improved significantly compared to last week."),
      areasOfImprovement: t('jx_improve', "Needs to avoid autopiloting when the team has numerical advantage (e.g. 5v3 situations). Over-aggression is costing unnecessary rounds. We need to recognize when to slow the pace and secure advantages."),
      mentalAndPersonal: t('jx_mental', "Gets frustrated quickly after losing the first few rounds. Should implement breathing/reset routines between rounds. Outside of game, seems slightly stressed—ensure proper rest and time away from the PC."),
      actionPlan: t('jx_plan', "1v1 VOD review focused on mid-round decision making and playing advantage situations.")
    },
    { 
      name: "vo0kashu", role: "Sentinel", main: "Killjoy / Cypher", initials: "VO", color: "#c4b5fd",
      recentPerformance: t('vo_perf', "Excellent anchor consistency. Cypher setups on Sunset completely shut down GX yesterday. Adaptability has improved significantly compared to last month."),
      areasOfImprovement: t('vo_improve', "Communication during rotations is still too quiet. Needs clearer and louder calls when leaving anchor positions to support the other site."),
      mentalAndPersonal: t('vo_mental', "Very emotionally stable and provides strong grounding for the team. Make sure their impact is acknowledged, as Sentinel value is not always reflected in scoreboard performance."),
      actionPlan: t('vo_plan', "Custom server session to finalize Killjoy retake setups on Lotus.")
    },
    { 
      name: "musashi", role: "Initiator", main: "Sova / Fade", initials: "MU", color: "#fcd34d",
      recentPerformance: t('mu_perf', "Utility usage is currently at a peak level. Fade pressure on Ascent mid consistently creates early picks for duelists."),
      areasOfImprovement: t('mu_improve', "Occasionally uses utility too early based on incorrect reads. Needs to preserve Sova drone for executes rather than early-round information gathering."),
      mentalAndPersonal: t('mu_mental', "Takes losses personally and tends to self-blame for utility usage. Needs reinforcement that Valorant is a team game and not every lost round is an initiator mistake. Very team-oriented mindset."),
      actionPlan: t('mu_plan', "Review “utility economy” concept in theory session. Reinforce secondary IGL value.")
    },
    { 
      name: "wolverine", role: "Controller", main: "Omen / Viper", initials: "WO", color: "#a78bfa",
      recentPerformance: t('wo_perf', "Struggled slightly with Viper wall timings on Icebox this week, but Omen performance on Haven was flawless. Excellent macro map understanding."),
      areasOfImprovement: t('wo_improve', "Needs to delegate more micro-calling to duelists. Over-managing team positioning while staying alive is reducing focus."),
      mentalAndPersonal: t('wo_mental', "High burnout risk due to IGL responsibilities. Recommend full rest day on Sundays with no Valorant. Mental fatigue is impacting late-round shotcalling."),
      actionPlan: t('wo_plan', "Shift early-round calling responsibility to musashi. Schedule relaxed 1v1 check-in (non-VOD, personal discussion).")
    },
    { 
      name: "Yowamu", role: "Flex", main: "Breach / KAY/O", initials: "YO", color: "#f87171",
      recentPerformance: t('yo_perf', "Clutch win rate has significantly improved. Mechanical consistency is translating well from practice into scrims."),
      areasOfImprovement: t('yo_improve', "Spacing during executes is inconsistent. Often too far ahead or too far behind duelists to reliably trade."),
      mentalAndPersonal: t('yo_mental', "Performs well in high momentum situations but becomes quiet during losing streaks. Needs to maintain vocal presence even when morale is low."),
      actionPlan: t('yo_plan', "Spacing drills during server time tomorrow. Pair with jannyxD for 2v2 retake exercises to build natural chemistry.")
    }
];

const getMockVods = () => [
    { 
      id: 1,
      map: "Ascent", opponent: "FNATIC", result: t('vod_1_result', 'Win 13-10'), date: "Oct 12, 2025", patch: "7.08",
      issue: t('vod_1_issue', 'Mid Control & Trading'), 
      matchType: "Official",
      link: "https://www.youtube.com/embed/dQw4w9WgXcQ?start=205",
      comps: { team: ["Jett", "KAY/O", "Sova", "Omen", "Killjoy"], enemy: ["Jett", "Sova", "KAY/O", "Omen", "Killjoy"] },
      timeline: [
        { time: "CT", note: t('tl_1_ct', 'CT Side'), type: "info" },
        { time: "03:25", note: t('tl_1_1', 'Bad positioning on A main peek'), type: "negative" },
        { time: "10:15", note: t('tl_1_2', 'Great mid pinch execution'), type: "positive" },
        { time: "T", note: t('tl_1_t', 'T Side'), type: "info" },
        { time: "16:40", note: t('tl_1_4', 'Round 13: 3vs1 discipline, good postplant'), type: "positive" },
        { time: "22:40", note: t('tl_1_3', 'Missed trade on B site'), type: "negative" }
      ],
      positives: t('vod_1_pos', "Great double peeks on A Main. vo0kashu's KJ setups stalled B effectively."),
      coachNote: t('vod_1_coach', "jannyxD needs to wait for the flash before jumping out of the smoke on Market."),
      playerNote: t('vod_1_player', "wolverine: My smokes were late on round 5, will fix.")
    },
    { 
      id: 2,
      map: "Haven", opponent: "Team Heretics", result: t('vod_2_result', 'Loss 9-13'), date: "Oct 10, 2025", patch: "7.08",
      issue: t('vod_2_issue', 'A Retake Coordination'),
      matchType: "Scrim",
      link: "https://www.youtube.com/embed/dQw4w9WgXcQ?start=310",
      comps: { team: ["Jett", "Breach", "Sova", "Omen", "Killjoy"], enemy: ["Neon", "Breach", "Sova", "Omen", "Cypher"] },
      timeline: [
        { time: "05:10", note: t('tl_2_1', 'Gave up A lobby for free'), type: "negative" },
        { time: "18:20", note: t('tl_2_2', 'Good eco round win'), type: "positive" }
      ],
      positives: t('vod_2_pos', "Good eco rounds. Yowamu's Breach flashes created space."),
      coachNote: t('vod_2_coach', "A-retakes are failing because we are giving up lobby too easily."),
      playerNote: t('vod_2_player', "musashi: I will save drone for the retake instead of early info.")
    },
    { 
      id: 3,
      map: "Lotus", opponent: "Karmine Corp", result: t('vod_3_result', 'Win 13-8'), date: "Oct 08, 2025", patch: "7.07",
      issue: t('vod_3_issue', 'Rubble Aggression'),
      matchType: "Scrim",
      link: "https://www.youtube.com/embed/dQw4w9WgXcQ?start=135",
      comps: { team: ["Raze", "Sova", "Viper", "Omen", "Killjoy"], enemy: ["Raze", "Sova", "Viper", "Omen", "Killjoy"] },
      timeline: [
        { time: "02:15", note: t('tl_3_1', 'Perfect A rubble take'), type: "positive" },
        { time: "14:50", note: t('tl_3_2', 'Overextended into spawn'), type: "negative" }
      ],
      positives: t('vod_3_pos', "Perfect early Rubble control. Trades were on point."),
      coachNote: t('vod_3_coach', "Keep pressing A Rubble, but don't overextend into their spawn."),
      playerNote: t('vod_3_player', "jannyxD: Felt very comfortable taking the aggressive duels today.")
    },
    {
      id: 4,
      map: "Sunset", opponent: "LOUD", result: t('vod_4_result', 'Loss 11-13'), date: "Oct 05, 2025", patch: "7.06",
      issue: t('vod_4_issue', 'Mid Round Adjustments'),
      matchType: "Official",
      link: "https://www.youtube.com/embed/dQw4w9WgXcQ?start=420",
      comps: { team: ["Raze", "Breach", "Sova", "Omen", "Cypher"], enemy: ["Raze", "KAY/O", "Sova", "Omen", "Cypher"] },
      timeline: [
        { time: "06:12", note: t('tl_4_1', 'Excellent B main exec with Breach stun'), type: "positive" },
        { time: "11:05", note: t('tl_4_2', 'Failed to adapt when LOUD pushed B main'), type: "negative" },
        { time: "25:30", note: t('tl_4_3', 'Crucial clutch by Yowamu on round 22'), type: "positive" }
      ],
      positives: t('vod_4_pos', "Strong individual mechanics. We won 60% of our opening duels. Good clutch potential shown."),
      coachNote: t('vod_4_coach', "We are becoming predictable in mid-rounds. Once they conditioned our B takes, we kept forcing it instead of defaulting and probing A."),
      playerNote: t('vod_4_player', "vo0kashu: Cypher setups on B were constantly broken by Sova shock darts. Need new variations.")
    },
    {
      id: 5,
      map: "Bind", opponent: "Paper Rex", result: t('vod_5_result', 'Win 13-5'), date: "Oct 02, 2025", patch: "7.06",
      issue: t('vod_5_issue', 'Handling Aggression'),
      matchType: "Scrim",
      link: "https://www.youtube.com/embed/dQw4w9WgXcQ?start=50",
      comps: { team: ["Raze", "Skye", "Brimstone", "Viper", "Cypher"], enemy: ["Reyna", "Raze", "Skye", "Brimstone", "Sova"] },
      timeline: [
        { time: "08:45", note: t('tl_5_1', 'Punished PRX early push in Showers (Great awareness)'), type: "positive" },
        { time: "16:10", note: t('tl_5_2', 'Great spacing on A site retake'), type: "positive" },
        { time: "19:20", note: t('tl_5_3', 'Lost anti-eco due to rushing Hookah'), type: "negative" }
      ],
      positives: t('vod_5_pos', "Outstanding discipline against a chaotic playstyle. Maintained structure and punished their over-extensions beautifully."),
      coachNote: t('vod_5_coach', "Perfectly executed the anti-aggression gameplan. Keep this level of patience and crossfire setups."),
      playerNote: t('vod_5_player', "jannyxD: Felt very easy to entry when they were constantly giving us map control for free.")
    }
];

const getCalendarDays = () => [
    { day: 31, inactive: true, tags: [] },
    { day: 1, tags: [
        {text: t('cal_vod', "VOD Review"), type: "vod", icon: "fa-solid fa-video"},
        {text: t('cal_exec', "Executes Practice"), type: "practice", icon: "fa-solid fa-server"}
    ] },
    { day: 2, tags: [
        {text: t('cal_theory_bind', "Theory Bind Defaults"), type: "vod", icon: "fa-solid fa-chalkboard"},
        {text: "vs NAVI", type: "scrim", icon: "fa-solid fa-crosshairs"}
    ] },
    { day: 3, tags: [
        {text: t('cal_escape', "Escape Room"), type: "practice", icon: "fa-solid fa-puzzle-piece"}
    ] },
    { day: 4, tags: [
        {text: t('cal_site_holds', "Site Holds Practice"), type: "practice", icon: "fa-solid fa-server"},
        {text: "vs BBL", type: "scrim", icon: "fa-solid fa-crosshairs"}
    ] },
    { day: 5, tags: [
        {text: t('cal_theory_ascent', "Theory Ascent Retakes"), type: "vod", icon: "fa-solid fa-chalkboard"}
    ] },
    { day: 6, tags: [
        {text: t('cal_vod_fnc', "VOD Review FNATIC"), type: "vod", icon: "fa-solid fa-video"}
    ] },
    { day: 7, tags: [] },
    { day: 8, tags: [
        {text: t('cal_lotus_setup', "Lotus Setups"), type: "practice", icon: "fa-solid fa-server"},
        {text: "vs Liquid", type: "scrim", icon: "fa-solid fa-crosshairs"}
    ] },
    { day: 9, tags: [
        {text: t('cal_feedback', "VOD Feedback"), type: "vod", icon: "fa-solid fa-comment-dots"}
    ] },
    { day: 10, tags: [
        {text: t('cal_retake_drill', "Retake Drill Split"), type: "practice", icon: "fa-solid fa-server"},
        {text: "vs TH", type: "scrim", icon: "fa-solid fa-crosshairs"}
    ] },
    { day: 11, tags: [
        {text: t('cal_theory_ct', "Theory CT/T Side"), type: "vod", icon: "fa-solid fa-chalkboard"},
        {text: "vs FNC", type: "scrim", icon: "fa-solid fa-crosshairs"}
    ] },
    { day: 12, tags: [
        {text: t('cal_mental', "Mental Prep"), type: "vod", icon: "fa-solid fa-brain"}
    ] },
    { day: 13, active: true, tags: [
        {text: t('cal_brainstorm', "Brainstorming"), type: "practice", icon: "fa-solid fa-lightbulb"},
        {text: "vs KC", type: "scrim", icon: "fa-solid fa-crosshairs"}
    ] },
    { day: 14, tags: [] },
    { day: 15, active: true, tags: [
        {text: t('cal_media', "VCT Media Day"), type: "scrim", icon: "fa-solid fa-camera"},
        {text: t('cal_ascent_exec', "Ascent Exec"), type: "practice", icon: "fa-solid fa-server"}
    ] },
    { day: 16, tags: [
        {text: t('cal_vod_kc', "VOD vs KC"), type: "vod", icon: "fa-solid fa-video"}
    ] },
    { day: 17, tags: [
        {text: t('cal_theory_sunset', "Theory Sunset"), type: "vod", icon: "fa-solid fa-chalkboard"},
        {text: "vs KOI", type: "scrim", icon: "fa-solid fa-crosshairs"}
    ] },
    { day: 18, tags: [
        {text: t('cal_gym', "Gym & Chill"), type: "practice", icon: "fa-solid fa-dumbbell"}
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
    const lowKdrPlayer = getPlayers().find(p => p.kdr < 1.0);
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
                        <span>${t('stat_winrate', 'Overall Winrate')}</span>
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
                        <span>${t('stat_attack', 'Attack Round Win %')}</span>
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
                        <span>${t('stat_defense', 'Defense Round Win %')}</span>
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
                        <span>${t('stat_acs', 'Team Avg ACS')}</span>
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
                            <div style="margin-bottom: 5px;"><strong style="color: #f87171; font-size: 0.9rem;">Coach Tinder</strong> <span style="color: var(--text-secondary); font-size: 0.75rem; margin-left: 5px;">${t('dash_insight_time', 'Today at 10:45 AM')}</span></div>
                            <div style="color: #dbdee1; font-size: 0.85rem; line-height: 1.5;">
                                ${t('dash_insight_msg', "We need to improve mid control and the 1-3-1 default, certain reactions that we will review tomorrow. I also want to change the A post-plant.<br><br>I would like to start implementing trigger words for when we are at a numbers disadvantage.")}
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
                            <h3 style="color: var(--text-primary); font-size: 1.1rem;"><i class="fa-solid fa-sun" style="color: #fbbf24; margin-right: 8px;"></i> ${t('goals_daily', 'Daily Focus & Objectives')}</h3>
                            <span style="font-size: 0.8rem; color: var(--text-secondary);">${t('goals_today', 'Today')}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <label style="display: flex; align-items: flex-start; gap: 12px; cursor: pointer; color: var(--text-primary); font-size: 0.95rem; line-height: 1.4;">
                                <input type="checkbox" checked style="accent-color: var(--accent-red); width: 16px; height: 16px; margin-top: 2px;" onchange="this.nextElementSibling.style.textDecoration = this.checked ? 'line-through' : 'none'; this.nextElementSibling.style.color = this.checked ? 'var(--text-secondary)' : '';">
                                <span style="text-decoration: line-through; color: var(--text-secondary); transition: 0.2s;"><strong style="color: #60a5fa;">${t('goals_teamwork', 'Teamwork')}:</strong> ${t('goals_teamwork_desc', 'Improve passive vs active comms in post-plants')}</span>
                            </label>
                            <label style="display: flex; align-items: flex-start; gap: 12px; cursor: pointer; color: var(--text-primary); font-size: 0.95rem; line-height: 1.4;">
                                <input type="checkbox" style="accent-color: var(--accent-red); width: 16px; height: 16px; margin-top: 2px;" onchange="this.nextElementSibling.style.textDecoration = this.checked ? 'line-through' : 'none'; this.nextElementSibling.style.color = this.checked ? 'var(--text-secondary)' : '';">
                                <span style="transition: 0.2s;"><strong style="color: #f87171;">${t('goals_duelists', 'Duelists')}:</strong> ${t('goals_duelists_desc', 'Playstyle more aggro, commit to getting more opening entries')}</span>
                            </label>
                            <label style="display: flex; align-items: flex-start; gap: 12px; cursor: pointer; color: var(--text-primary); font-size: 0.95rem; line-height: 1.4;">
                                <input type="checkbox" style="accent-color: var(--accent-red); width: 16px; height: 16px; margin-top: 2px;" onchange="this.nextElementSibling.style.textDecoration = this.checked ? 'line-through' : 'none'; this.nextElementSibling.style.color = this.checked ? 'var(--text-secondary)' : '';">
                                <span style="transition: 0.2s;"><strong style="color: #c084fc;">${t('goals_controllers', 'Controllers')}:</strong> ${t('goals_controllers_desc', 'Better smoke efficiency, coordinate timings with the entry')}</span>
                            </label>
                            <label style="display: flex; align-items: flex-start; gap: 12px; cursor: pointer; color: var(--text-primary); font-size: 0.95rem; line-height: 1.4;">
                                <input type="checkbox" style="accent-color: var(--accent-red); width: 16px; height: 16px; margin-top: 2px;" onchange="this.nextElementSibling.style.textDecoration = this.checked ? 'line-through' : 'none'; this.nextElementSibling.style.color = this.checked ? 'var(--text-secondary)' : '';">
                                <span style="transition: 0.2s;"><strong style="color: #fbbf24;">${t('goals_initiators', 'Initiators')}:</strong> ${t('goals_initiators_desc', 'Be careful not to burn utility too fast early round')}</span>
                            </label>
                            <div style="color: var(--text-secondary); margin-top: 5px; font-size: 0.9rem; cursor: pointer; display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-plus"></i> ${t('goals_add', 'Add new focus')}</div>
                        </div>
                    </div>

                    <!-- Weekly -->
                    <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px; margin-bottom: 15px;">
                            <h3 style="color: var(--text-primary); font-size: 1.1rem;"><i class="fa-solid fa-calendar-week" style="color: #60a5fa; margin-right: 8px;"></i> ${t('goals_weekly', 'Week Goals')}</h3>
                            <span style="font-size: 0.8rem; color: var(--text-secondary);">${t('goals_current', 'Current')}</span>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 15px;">
                            <div style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 6px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; align-items: center;">
                                    <strong style="color: var(--text-primary); font-size: 0.95rem;">${t('goals_improve_haven', 'Improve Haven Retakes')}</strong>
                                    <span style="font-size: 0.8rem; background: rgba(16, 185, 129, 0.2); color: #6ee7b7; padding: 3px 8px; border-radius: 4px;">80%</span>
                                </div>
                                <div style="width: 100%; background: #333; height: 8px; border-radius: 4px;">
                                    <div style="width: 80%; background: var(--success); height: 100%; border-radius: 4px;"></div>
                                </div>
                            </div>
                            <div style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 6px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 10px; align-items: center;">
                                    <strong style="color: var(--text-primary); font-size: 0.95rem;">${t('goals_pistol', 'Pistol Round Consistency')}</strong>
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
                            <h3 style="color: var(--text-primary); font-size: 1.1rem;"><i class="fa-solid fa-flag-checkered" style="color: #c084fc; margin-right: 8px;"></i> ${t('goals_monthly', 'Month Objectives')}</h3>
                        </div>
                        
                        <!-- Scrims & Tactical -->
                        <div style="margin-bottom: 18px;">
                            <h4 style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;"><i class="fa-solid fa-server" style="margin-right: 5px;"></i> ${t('goals_scrims_tactical', 'Scrims & Tactical')}</h4>
                            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
                                <li style="display: flex; align-items: flex-start; gap: 10px; color: var(--text-primary); font-size: 0.9rem; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px;">
                                    <i class="fa-solid fa-caret-right" style="color: #60a5fa; margin-top: 3px;"></i>
                                    <div style="line-height: 1.4;">
                                        <strong style="color: white;">${t('goals_fundamentals', 'Fundamentals & Comms')}:</strong> ${t('goals_fundamentals_desc', 'Clear passive/active comms during post-plants and clean retake spacing.')}
                                    </div>
                                </li>
                                <li style="display: flex; align-items: flex-start; gap: 10px; color: var(--text-primary); font-size: 0.9rem; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px;">
                                    <i class="fa-solid fa-caret-right" style="color: #60a5fa; margin-top: 3px;"></i>
                                    <div style="line-height: 1.4;">
                                        <strong style="color: white;">${t('goals_map_pool', 'Map Pool & Economy')}:</strong> ${t('goals_map_pool_desc', 'Consolidate Sunset into the map pool and boost pistol round win-rate.')}
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <!-- Officials & Psychology -->
                        <div>
                            <h4 style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;"><i class="fa-solid fa-brain" style="margin-right: 5px;"></i> ${t('goals_officials_psychology', 'Officials & Psychology')}</h4>
                            <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
                                <li style="display: flex; align-items: flex-start; gap: 10px; color: var(--text-primary); font-size: 0.9rem; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; border-left: 2px solid #ec4899;">
                                    <i class="fa-solid fa-caret-right" style="color: #ec4899; margin-top: 3px;"></i>
                                    <div style="line-height: 1.4;">
                                        <strong style="color: white;">${t('goals_emotional_control', 'Emotional Control')}:</strong> ${t('goals_emotional_control_desc', 'Cold mentality on stage. Stay motivated but stable—avoid massive emotional highs and lows.')}
                                    </div>
                                </li>
                                <li style="display: flex; align-items: flex-start; gap: 10px; color: var(--text-primary); font-size: 0.9rem; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; border-left: 2px solid #ec4899;">
                                    <i class="fa-solid fa-caret-right" style="color: #ec4899; margin-top: 3px;"></i>
                                    <div style="line-height: 1.4;">
                                        <strong style="color: white;">${t('goals_moral_support', 'Moral Support')}:</strong> ${t('goals_moral_support_desc', 'Hype up your teammates actively. Always inject positivity to recover momentum after lost rounds.')}
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
                        <h3 style="color: var(--text-primary); font-size: 1.1rem; margin-bottom: 1.2rem; display: flex; align-items: center;"><i class="fa-solid fa-user-focus" style="color: var(--accent-red); margin-right: 8px;"></i> ${t('goals_player_focus', 'Player Focus')}</h3>
                        <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px;">
                            ${getPlayers().map(p => `
                                <li style="display: flex; flex-direction: column; padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05);">
                                    <span style="font-weight: 500; color: var(--text-primary); font-size: 0.95rem;">${p.name} <span style="font-size:0.75rem; color:var(--text-secondary);">(${t('role_' + p.role.toLowerCase(), p.role)})</span></span>
                                    <span style="color: var(--accent-red); font-size: 0.85rem; margin-top: 4px;">
                                        <i class="fa-solid fa-crosshairs" style="font-size:0.7rem; margin-right:4px;"></i> 
                                        ${p.role === 'Duelist' ? t('focus_duelist', 'Entry Pathing & Dash timings') : (p.role === 'Controller' ? t('focus_controller', 'Smoke Timings on Exec') : t('focus_other', 'Utility Usage & Spacing'))}
                                    </span>
                                </li>
                            `).join('')}
                        </ul>
                    </div>

                    <!-- Archived -->
                    <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; opacity: 0.6;">
                        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px; margin-bottom: 15px;">
                            <h3 style="color: var(--text-secondary); font-size: 1rem;"><i class="fa-solid fa-box-archive" style="margin-right: 8px;"></i> ${t('goals_archived', 'Archived')}</h3>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 10px;">
                            <label style="display: flex; align-items: center; gap: 10px; color: var(--text-secondary); font-size: 0.85rem;">
                                <i class="fa-solid fa-check" style="color: var(--success);"></i>
                                <span style="text-decoration: line-through;">${t('goals_archived_1', 'Fix Bind B Defense Rotations')}</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 10px; color: var(--text-secondary); font-size: 0.85rem;">
                                <i class="fa-solid fa-check" style="color: var(--success);"></i>
                                <span style="text-decoration: line-through;">${t('goals_archived_2', 'Setup Ascent default comps')}</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 10px; color: var(--text-secondary); font-size: 0.85rem;">
                                <i class="fa-solid fa-check" style="color: var(--success);"></i>
                                <span style="text-decoration: line-through;">${t('goals_archived_3', 'Sign Assistant Coach')}</span>
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
                    <h3 style="color: var(--text-primary); font-size: 1.2rem;"><i class="fa-regular fa-calendar-days" style="margin-right: 8px; color: #60a5fa;"></i> ${t('scrims_monthly', 'Monthly Overview')} <span style="color: var(--text-secondary); font-size: 0.9rem; font-weight: normal; margin-left: 10px;">${t('scrim_month', 'April 2025')}</span></h3>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <span style="font-size: 0.8rem; background: rgba(239,68,68,0.2); color: #f87171; padding: 3px 8px; border-radius: 4px;">${t('scrim_badge_scrim', 'Scrim')}</span>
                        <span style="font-size: 0.8rem; background: rgba(59,130,246,0.2); color: #60a5fa; padding: 3px 8px; border-radius: 4px;">${t('scrim_badge_drills', 'Drills')}</span>
                        <span style="font-size: 0.8rem; background: rgba(139,92,246,0.2); color: #c4b5fd; padding: 3px 8px; border-radius: 4px;">${t('scrim_badge_vod', 'VOD')}</span>
                        <button style="background: transparent; color: var(--text-secondary); border: 1px solid rgba(255,255,255,0.1); padding: 4px 10px; border-radius: 4px; cursor: pointer; margin-left: 10px;"><i class="fa-solid fa-download"></i></button>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; margin-bottom: 5px;">
                    ${[t('day_mon','MON'), t('day_tue','TUE'), t('day_wed','WED'), t('day_thu','THU'), t('day_fri','FRI'), t('day_sat','SAT'), t('day_sun','SUN')].map(d => `<div style="text-align: center; color: var(--text-secondary); font-size: 0.75rem; letter-spacing: 1px; margin-bottom: 5px;">${d}</div>`).join('')}
                    ${getCalendarDays().map(d => `
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
                    <h3 style="color: var(--text-secondary); font-size: 0.85rem; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 15px;">${t('scrims_upcoming', 'Upcoming Sessions')}</h3>
                    
                    <div style="display: flex; flex-direction: column; gap: 15px;">
                        <div style="padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: flex-start;">
                            <div>
                                <strong style="color: white; font-size: 1rem; display: block; margin-bottom: 4px;">${t('scrim_kc_title', 'vs KC — Today 20:00')}</strong>
                                <span style="color: var(--text-secondary); font-size: 0.85rem;">${t('scrim_kc_desc', 'Maps: Ascent, Bind · Focus: Mid control')}</span>
                            </div>
                            <span style="font-size: 0.75rem; background: rgba(239,68,68,0.2); color: #f87171; padding: 3px 8px; border-radius: 4px; font-weight: bold;">${t('scrim_badge_scrim', 'Scrim')}</span>
                        </div>
                        <div style="padding-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: flex-start;">
                            <div>
                                <strong style="color: white; font-size: 1rem; display: block; margin-bottom: 4px;">${t('scrim_prac_title', 'Ascent Exec Drills — Apr 15')}</strong>
                                <span style="color: var(--text-secondary); font-size: 0.85rem;">${t('scrim_prac_desc', 'Maps: Ascent · Focus: A-site splits')}</span>
                            </div>
                            <span style="font-size: 0.75rem; background: rgba(59,130,246,0.2); color: #60a5fa; padding: 3px 8px; border-radius: 4px; font-weight: bold;">${t('scrim_badge_prac', 'Practice')}</span>
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
                    <h3 style="color: var(--text-primary);">${t('scrims_detailed', 'Detailed Weekly Schedule')}</h3>
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
                        <button style="background: transparent; border: 1px solid var(--accent-red); color: var(--accent-red); padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold; margin-top: 5px;">${t('playbook_gameplan', 'View Gameplan')}</button>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1px; background: rgba(255,255,255,0.05);">
                        <!-- T SIDE -->
                        <div style="background: var(--bg-card); padding: 1.5rem;">
                            <h4 style="color: #f87171; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-khanda"></i> ${t('playbook_attack', 'ATTACK (T-Side)')}</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-file-lines" style="color: #94a3b8; margin-right: 5px;"></i> ${t('playbook_defaults', 'Defaults')} (3)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-bolt" style="color: #fbbf24; margin-right: 5px;"></i> ${t('playbook_executes', 'Executes')} (5)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-bomb" style="color: #f87171; margin-right: 5px;"></i> ${t('playbook_postplants', 'Post-Plants')} (4)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-crosshairs" style="color: #60a5fa; margin-right: 5px;"></i> ${t('playbook_pistols', 'Pistols')} (2)</span>
                            </div>
                        </div>
                        <!-- CT SIDE -->
                        <div style="background: var(--bg-card); padding: 1.5rem;">
                            <h4 style="color: #60a5fa; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-shield-halved"></i> ${t('playbook_defense', 'DEFENSE (CT-Side)')}</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-file-lines" style="color: #94a3b8; margin-right: 5px;"></i> ${t('playbook_defaults', 'Defaults')} (2)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-rotate-left" style="color: #4ade80; margin-right: 5px;"></i> ${t('playbook_retakes', 'Retakes')} (4)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-crosshairs" style="color: #60a5fa; margin-right: 5px;"></i> ${t('playbook_pistols', 'Pistols')} (2)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-eye-slash" style="color: #c084fc; margin-right: 5px;"></i> ${t('playbook_antiecos', 'Anti-Ecos')} (1)</span>
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
                        <button style="background: transparent; border: 1px solid #00bcd4; color: #00bcd4; padding: 6px 12px; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold; margin-top: 5px;">${t('playbook_gameplan', 'View Gameplan')}</button>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1px; background: rgba(255,255,255,0.05);">
                        <!-- T SIDE -->
                        <div style="background: var(--bg-card); padding: 1.5rem;">
                            <h4 style="color: #f87171; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-khanda"></i> ${t('playbook_attack', 'ATTACK (T-Side)')}</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-file-lines" style="color: #94a3b8; margin-right: 5px;"></i> ${t('playbook_defaults', 'Defaults')} (4)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-bolt" style="color: #fbbf24; margin-right: 5px;"></i> ${t('playbook_executes', 'Executes')} (6)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-bomb" style="color: #f87171; margin-right: 5px;"></i> ${t('playbook_postplants', 'Post-Plants')} (3)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-crosshairs" style="color: #60a5fa; margin-right: 5px;"></i> ${t('playbook_pistols', 'Pistols')} (2)</span>
                            </div>
                        </div>
                        <!-- CT SIDE -->
                        <div style="background: var(--bg-card); padding: 1.5rem;">
                            <h4 style="color: #60a5fa; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-shield-halved"></i> ${t('playbook_defense', 'DEFENSE (CT-Side)')}</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-file-lines" style="color: #94a3b8; margin-right: 5px;"></i> ${t('playbook_defaults', 'Defaults')} (3)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-rotate-left" style="color: #4ade80; margin-right: 5px;"></i> ${t('playbook_retakes', 'Retakes')} (5)</span>
                                <span style="background: rgba(255,255,255,0.05); color: #cbd5e1; padding: 6px 12px; border-radius: 4px; font-size: 0.8rem;"><i class="fa-solid fa-crosshairs" style="color: #60a5fa; margin-right: 5px;"></i> ${t('playbook_pistols', 'Pistols')} (1)</span>
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
        desc: "Interactive Match Database and In-depth VOD Analysis.",
        render: () => {
            setTimeout(window.renderVodList, 0);
            return `
            <div class="vod-dashboard">
                <!-- Dashboard Summary -->
                <div class="dashboard-grid" style="margin-bottom: 2rem;">
                    <div class="stat-card">
                        <div class="stat-card-header"><span>Total Matches</span><i class="fa-solid fa-database" style="color: #60a5fa"></i></div>
                        <div class="stat-value">34</div>
                        <div class="stat-trend trend-up"><span>+5 this week</span></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-card-header"><span>Win Rate (VODs)</span><i class="fa-solid fa-trophy" style="color: #fcd34d"></i></div>
                        <div class="stat-value">62%</div>
                        <div class="stat-trend trend-up"><span>Consistent</span></div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-card-header"><span>Most Played Map</span><i class="fa-solid fa-map" style="color: #c084fc"></i></div>
                        <div class="stat-value">Ascent</div>
                        <div class="stat-trend"><span>12 Matches (65% WR)</span></div>
                    </div>
                </div>

                <!-- Advanced Filters -->
                <div style="background: var(--bg-card); padding: 1.5rem; border-radius: 8px; margin-bottom: 2rem; border: 1px solid rgba(255,255,255,0.05);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 15px;">
                        <h3 style="color: white; font-size: 1.1rem; margin: 0;"><i class="fa-solid fa-filter" style="color: var(--accent-red); margin-right: 8px;"></i> Match Database Filters</h3>
                        <div class="search-bar" style="position: relative;">
                            <input type="text" id="vod-search" placeholder="Search opponent, map, focus..." style="background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); color: white; padding: 8px 12px 8px 35px; border-radius: 4px; outline: none; width: 250px;" oninput="window.renderVodList()">
                            <i class="fa-solid fa-search" style="position: absolute; left: 12px; top: 10px; color: var(--text-secondary);"></i>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                        <select id="filter-map" onchange="window.renderVodList()" style="background: var(--bg-secondary); color: white; border: 1px solid rgba(255,255,255,0.2); padding: 8px 12px; border-radius: 4px; outline: none; cursor: pointer;">
                            <option value="all">${t('filter_all_maps', 'All Maps')}</option>
                            <option value="Ascent">Ascent</option>
                            <option value="Bind">Bind</option>
                            <option value="Haven">Haven</option>
                            <option value="Lotus">Lotus</option>
                            <option value="Sunset">Sunset</option>
                        </select>
                        <select id="filter-result" onchange="window.renderVodList()" style="background: var(--bg-secondary); color: white; border: 1px solid rgba(255,255,255,0.2); padding: 8px 12px; border-radius: 4px; outline: none; cursor: pointer;">
                            <option value="all">${t('filter_all_results', 'All Results')}</option>
                            <option value="Win">${t('filter_win', 'Win')}</option>
                            <option value="Loss">${t('filter_loss', 'Loss')}</option>
                        </select>
                        <select id="filter-type" onchange="window.renderVodList()" style="background: var(--bg-secondary); color: white; border: 1px solid rgba(255,255,255,0.2); padding: 8px 12px; border-radius: 4px; outline: none; cursor: pointer;">
                            <option value="all">${t('filter_all_types', 'All Types')}</option>
                            <option value="Official">${t('filter_official', 'Official')}</option>
                            <option value="Scrim">${t('filter_scrim', 'Scrim')}</option>
                        </select>
                        <button onclick="window.openAddVodModal()" style="background: var(--accent-red); color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; font-weight: bold; margin-left: auto; transition: 0.2s;" onmouseover="this.style.filter='brightness(1.2)'" onmouseout="this.style.filter='brightness(1)'"><i class="fa-solid fa-plus" style="margin-right: 5px;"></i> ${t('btn_add_vod', 'Add New VOD')}</button>
                    </div>
                </div>

                <!-- Match List Container -->
                <div id="vod-list-container" style="display: flex; flex-direction: column; gap: 15px;">
                    <!-- Rendered via JS -->
                </div>
            </div>
            `;
        }
    },
    coach: {
        title: "Coach Panel",
        desc: "Private player evaluations and holistic feedback.",
        render: () => `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                ${getPlayers().map(p => `
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
                                    <i class="fa-solid fa-chart-line"></i> ${t('coach_perf', 'Performance Trend')}
                                </div>
                                <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; margin: 0;">${p.recentPerformance}</p>
                            </div>

                            <div>
                                <div style="display: flex; align-items: center; gap: 6px; color: #fcd34d; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; font-weight: bold;">
                                    <i class="fa-solid fa-hammer"></i> ${t('coach_tactical', 'Tactical Focus')}
                                </div>
                                <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; margin: 0;">${p.areasOfImprovement}</p>
                            </div>

                            <div>
                                <div style="display: flex; align-items: center; gap: 6px; color: #f472b6; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; font-weight: bold;">
                                    <i class="fa-solid fa-heart-pulse"></i> ${t('coach_mental', 'Human & Mental')}
                                </div>
                                <p style="color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; margin: 0;">${p.mentalAndPersonal}</p>
                            </div>

                        </div>

                        <!-- Action Plan -->
                        <div style="margin-top: 1.5rem; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 6px; padding: 12px;">
                            <div style="color: var(--text-secondary); font-size: 0.7rem; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 6px; font-weight: bold;">${t('coach_action', 'Next Action Plan')}</div>
                            <p style="color: #94a3b8; font-size: 0.85rem; line-height: 1.5; margin: 0;">${p.actionPlan}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `
    }
};

const t = (key, defaultText) => {
    return (appTranslations[currentLang] && appTranslations[currentLang][key]) ? appTranslations[currentLang][key] : defaultText;
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
        media_day: "Reminder: Tuesday is Media Day for VCT! New jerseys and Logitech sponsor videos. Please be ready.",
        stat_winrate: "Overall Winrate",
        stat_attack: "Attack Round Win %",
        stat_defense: "Defense Round Win %",
        stat_acs: "Team Avg ACS",
        goals_daily: "Daily Focus & Objectives",
        goals_weekly: "Week Goals",
        goals_monthly: "Month Objectives",
        scrims_monthly: "Monthly Overview",
        scrims_upcoming: "Upcoming Sessions",
        scrims_detailed: "Detailed Weekly Schedule",
        playbook_attack: "ATTACK (T-Side)",
        playbook_defense: "DEFENSE (CT-Side)",
        vods_feedback: "View Feedback & Notes",
        coach_perf: "Performance Trend",
        coach_tactical: "Tactical Focus",
        coach_mental: "Human & Mental",
        coach_action: "Next Action Plan",
        playbook_defaults: "Defaults",
        playbook_executes: "Executes",
        playbook_postplants: "Post-Plants",
        playbook_pistols: "Pistols",
        playbook_retakes: "Retakes",
        playbook_antiecos: "Anti-Ecos",
        playbook_gameplan: "View Gameplan",
        vods_positives: "Positives",
        vods_coach_note: "Coach Note",
        vods_player_note: "Player Note",
        goals_today: "Today",
        goals_teamwork: "Teamwork",
        goals_teamwork_desc: "Improve passive vs active comms in post-plants",
        goals_duelists: "Duelists",
        goals_duelists_desc: "Playstyle more aggro, commit to getting more opening entries",
        goals_controllers: "Controllers",
        goals_controllers_desc: "Better smoke efficiency, coordinate timings with the entry",
        goals_initiators: "Initiators",
        goals_initiators_desc: "Be careful not to burn utility too fast early round",
        goals_add: "Add new focus",
        goals_current: "Current",
        goals_improve_haven: "Improve Haven Retakes",
        goals_pistol: "Pistol Round Consistency",
        goals_scrims_tactical: "Scrims & Tactical",
        goals_fundamentals: "Fundamentals & Comms",
        goals_fundamentals_desc: "Clear passive/active comms during post-plants and clean retake spacing.",
        goals_map_pool: "Map Pool & Economy",
        goals_map_pool_desc: "Consolidate Sunset into the map pool and boost pistol round win-rate.",
        goals_officials_psychology: "Officials & Psychology",
        goals_emotional_control: "Emotional Control",
        goals_emotional_control_desc: "Cold mentality on stage. Stay motivated but stable—avoid massive emotional highs and lows.",
        goals_moral_support: "Moral Support",
        goals_moral_support_desc: "Hype up your teammates actively. Always inject positivity to recover momentum after lost rounds.",
        goals_player_focus: "Player Focus",
        goals_archived: "Archived",
        goals_archived_1: "Fix Bind B Defense Rotations",
        goals_archived_2: "Setup Ascent default comps",
        goals_archived_3: "Sign Assistant Coach",
        dash_insight_time: "Today at 10:45 AM",
        dash_insight_msg: "We need to improve mid control and the 1-3-1 default, certain reactions that we will review tomorrow. I also want to change the A post-plant.<br><br>I would like to start implementing trigger words for when we are at a numbers disadvantage.",
        scrim_kc_title: "vs KC — Today 20:00",
        scrim_kc_desc: "Maps: Ascent, Bind · Focus: Defaults on CT and executes T side",
        scrim_badge_scrim: "Scrim",
        scrim_prac_title: "Ascent Exec Drills — Apr 15",
        scrim_prac_desc: "Maps: Ascent · Focus: A-site splits",
        scrim_badge_prac: "Practice",
        scrim_badge_drills: "Drills",
        scrim_badge_vod: "VOD",
        scrim_month: "April 2025",
        day_mon: "MON",
        day_tue: "TUE",
        day_wed: "WED",
        day_thu: "THU",
        day_fri: "FRI",
        day_sat: "SAT",
        day_sun: "SUN",
        role_duelist: "Duelist",
        role_controller: "Controller",
        role_initiator: "Initiator",
        role_sentinel: "Sentinel",
        role_flex: "Flex",
        focus_duelist: "Entry Pathing & Dash timings",
        focus_other: "Utility Usage & Spacing",
        modal_title: "Bind & Haven Gameplan",
        modal_subtitle: "Tactical Playbook • Prepared by Coach Tinder",
        modal_bind_title: "Bind: Default & Control",
        modal_bind_a_short: "A-Short Conditionings & U-Hall Control",
        modal_bind_a_short_desc: "We are struggling with taking A Short control and dying to early aggression. From now on, <strong>musashi (Sova)</strong> will start A long and use the recon bolt over the teleporter roof to scan U-hall. This prevents the early peek and forces their defense to react. <strong>wolverine (Omen)</strong>, you must smoke Heaven earlier; the current delay is allowing their OP to take a free shot before retreating.",
        modal_bind_b_long: "B-Long Exec Fundamentals",
        modal_bind_b_long_desc: "Stop dry-peeking Hookah. We will run a 3-2 split where Viper holds B Long with a slow wall, while our entry package waits for the Skye dog clear inside Hookah. Patience is key here.",
        modal_haven_title: "Haven: Comp Variations & Fundamentals",
        modal_haven_desc: "For this macro-cycle, we'll be running <strong>two different comps</strong> on Haven that we locked in during yesterday's theory review. Both are designed to exploit different pacing and tempos.",
        modal_comp_a: "Comp A: Standard Default",
        modal_comp_a_tag: "Control & Info",
        modal_fundamentals: "Fundamentals:",
        modal_comp_a_fund: "Passive map control, heavy info denial with KJ setups.",
        modal_ct_pos: "CT Positioning:",
        modal_comp_a_ct: "Jett OP flexes A/C. KJ hard anchors Garage. Omen anchors C.",
        modal_t_side: "T-Side Defaults:",
        modal_comp_a_t: "A Lobby take with Breach stun + Sova drone clear.",
        modal_comp_b: "Comp B: Double Controller",
        modal_comp_b_tag: "Aggressive",
        modal_comp_b_fund: "Fast execs, total LOS denial (Viper Wall).",
        modal_comp_b_ct: "Cypher anchors C. Viper walls Mid. Neon plays free rotator.",
        modal_comp_b_t: "B bursts with Viper orb and Neon Fast-lane.",
        modal_garage_title: "Garage Control & Retake Protocol",
        modal_garage_desc: "Stop dry-peeking Garage on defense. Set your alarmbot/trapwires deeper in mid doors, and play for retake if they break it fast. Over-peeking Garage is costing us first blood 40% of the time. Let's play our numbers advantage for retakes (our C/Garage retake winrate is 68% when playing 5v5).",
        modal_coach_note_title: "Coach Note for Tomorrow:",
        modal_coach_note_desc: "We will practice these setups extensively in tomorrow's server time before the Karmine Corp scrim. Please read and internalize your specific agent role for both comps. If you're unsure about your pathing in Comp B, DM me."
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
        media_day: "リマインダー：火曜日はVCTのメディアデーです！新しいジャージとLogitechスポンサーのビデオ撮影があります。準備をお願いします。",
        stat_winrate: "総合勝率",
        stat_attack: "攻撃ラウンド勝率",
        stat_defense: "防衛ラウンド勝率",
        stat_acs: "チーム平均ACS",
        goals_daily: "毎日の焦点と目標",
        goals_weekly: "今週の目標",
        goals_monthly: "今月の目標",
        scrims_monthly: "月間概要",
        scrims_upcoming: "今後のセッション",
        scrims_detailed: "詳細な週間スケジュール",
        playbook_attack: "攻撃 (Tサイド)",
        playbook_defense: "防衛 (CTサイド)",
        vods_feedback: "フィードバックとメモを表示",
        coach_perf: "パフォーマンストレンド",
        coach_tactical: "戦術的フォーカス",
        coach_mental: "人間性とメンタル",
        coach_action: "次のアクションプラン",
        playbook_defaults: "デフォルト",
        playbook_executes: "エクスキュート",
        playbook_postplants: "ポストプラント",
        playbook_pistols: "ピストル",
        playbook_retakes: "リテイク",
        playbook_antiecos: "アンチエコ",
        playbook_gameplan: "ゲームプランを見る",
        vods_positives: "ポジティブな点",
        vods_coach_note: "コーチのメモ",
        vods_player_note: "プレイヤーのメモ",
        goals_today: "今日",
        goals_teamwork: "チームワーク",
        goals_teamwork_desc: "ポストプラントでの受動的・能動的コミュニケーションの改善",
        goals_duelists: "デュエリスト",
        goals_duelists_desc: "よりアグレッシブなプレイスタイル、オープニングキルにコミット",
        goals_controllers: "コントローラー",
        goals_controllers_desc: "スモーク効率の向上、エントリーのタイミング調整",
        goals_initiators: "イニシエーター",
        goals_initiators_desc: "序盤でのアビリティの無駄遣いに注意",
        goals_add: "新しい目標を追加",
        goals_current: "現在",
        goals_improve_haven: "ヘイヴンのリテイク改善",
        goals_pistol: "ピストルラウンドの安定性",
        goals_scrims_tactical: "スクリムと戦術",
        goals_fundamentals: "基礎とコミュニケーション",
        goals_fundamentals_desc: "ポストプラント時のクリアなコミュニケーションとリテイクの配置",
        goals_map_pool: "マッププールと経済",
        goals_map_pool_desc: "サンセットをマッププールに統合し、ピストル勝率を上げる",
        goals_officials_psychology: "公式戦と心理学",
        goals_emotional_control: "感情のコントロール",
        goals_emotional_control_desc: "冷静なメンタリティ。モチベーションを保ちつつ安定させる。",
        goals_moral_support: "精神的サポート",
        goals_moral_support_desc: "チームメイトを積極的に盛り上げる。常にポジティブに。",
        goals_player_focus: "プレイヤーフォーカス",
        goals_archived: "アーカイブ",
        goals_archived_1: "バインドB防衛のローテーション修正",
        goals_archived_2: "アセントのデフォルト構成の設定",
        goals_archived_3: "アシスタントコーチと契約",
        vod_1_result: "勝利 13-10",
        vod_1_issue: "ミッドコントロールとトレード",
        vod_1_pos: "Aメインでの素晴らしいダブルピーク。vo0kashuのKJセットアップがBを効果的に遅延させた。",
        vod_1_coach: "jannyxDはマーケットのスモークから飛び出す前にフラッシュを待つ必要がある。",
        vod_1_player: "wolverine: ラウンド5のスモークが遅れたので修正する。",
        vod_2_result: "敗北 9-13",
        vod_2_issue: "Aリテイクの連携",
        vod_2_pos: "エコラウンドは良かった。Yowamuのブリーチフラッシュがスペースを作った。",
        vod_2_coach: "ロビーを簡単に明け渡しすぎているため、Aリテイクが失敗している。",
        vod_2_player: "musashi: 早期情報の代わりにリテイク用にドローンを温存する。",
        vod_3_result: "勝利 13-8",
        vod_3_issue: "ラブルのアグレッション",
        vod_3_pos: "完璧な初期のラブルコントロール。トレードが的確だった。",
        vod_3_coach: "Aラブルへのプレッシャーを継続するが、スポーンまで深追いしないこと。",
        vod_3_player: "jannyxD: 今日はアグレッシブなデュエルを仕掛けるのがとても快適だった。",
        cal_vod: "VODレビュー",
        cal_exec: "エクスキュート練習",
        cal_theory_bind: "バインドデフォルト理論",
        cal_escape: "脱出ゲーム",
        cal_site_holds: "サイトホールド練習",
        cal_theory_ascent: "アセントリテイク理論",
        cal_vod_fnc: "FNATIC戦VODレビュー",
        cal_lotus_setup: "ロータスセットアップ",
        cal_feedback: "VODフィードバック",
        cal_retake_drill: "スプリットリテイクドリル",
        cal_theory_ct: "CT/Tサイド理論",
        cal_mental: "メンタル準備",
        cal_brainstorm: "ブレインストーミング",
        cal_media: "VCTメディアデー",
        cal_ascent_exec: "アセントエクスキュート",
        cal_vod_kc: "対KC戦VOD",
        cal_theory_sunset: "サンセット理論",
        cal_gym: "ジム＆リラックス",
        dash_insight_time: "今日 10:45 AM",
        dash_insight_msg: "ミッドのコントロールと1-3-1のデフォルト、明日確認する特定のリアクションを改善する必要がある。また、Aのポストプラントも変更したい。<br><br>人数不利の状況でのトリガーワードの実装を始めたいと思う。",
        scrim_kc_title: "vs KC — 今日 20:00",
        scrim_kc_desc: "マップ: アセント, バインド · フォーカス: CTでのデフォルトとTサイドでのエクスキュート",
        scrim_badge_scrim: "スクリム",
        scrim_prac_title: "アセントエクスキュート練習 — 4月15日",
        scrim_prac_desc: "マップ: アセント · フォーカス: Aサイトスプリット",
        scrim_badge_prac: "練習",
        scrim_badge_drills: "ドリル",
        scrim_badge_vod: "VOD",
        scrim_month: "2025年 4月",
        day_mon: "月",
        day_tue: "火",
        day_wed: "水",
        day_thu: "木",
        day_fri: "金",
        day_sat: "土",
        day_sun: "日",
        role_duelist: "デュエリスト",
        role_controller: "コントローラー",
        role_initiator: "イニシエーター",
        role_sentinel: "センチネル",
        role_flex: "フレックス",
        focus_duelist: "エントリーの経路とダッシュのタイミング",
        focus_controller: "エクスキュート時のスモークタイミング",
        focus_other: "アビリティの使用とスペーシング",
        jx_perf: "過去5回のスクリムで継続的に強力なエントリースペースを作り出している。先週と比べ、イニシエーターのフラッシュと合わせたエントリーのタイミングが大幅に向上。",
        jx_improve: "数的優位（5v3など）の状況でオートパイロットになるのを避ける必要がある。過度な攻撃性が不要なラウンドの敗北を招いている。ペースを落として優位を確実にするタイミングを認識すること。",
        jx_mental: "序盤の数ラウンドを落とすとすぐにフラストレーションを溜めやすい。ラウンド間に呼吸やリセットのルーティンを取り入れるべき。ゲーム外でも少しストレスを感じているようなので、PCから離れて適切な休息をとるように。",
        jx_plan: "ミッドラウンドの意思決定と優位な状況でのプレイに焦点を当てた1v1のVODレビュー。",
        vo_perf: "アンカーとしての安定性が素晴らしい。昨日のサンセットでのサイファーのセットアップはGXを完全にシャットダウンした。先月に比べて適応力が大幅に向上。",
        vo_improve: "ローテーション中のコミュニケーションがまだ静かすぎる。他のサイトをサポートするためにアンカーのポジションを離れる際は、より明確で大きなコールが必要。",
        vo_mental: "感情的に非常に安定しており、チームに強い安心感をもたらしている。センチネルの価値はスコアボードに反映されないこともあるため、彼らの影響力が評価されていることを確実に伝えること。",
        vo_plan: "ロータスのキルジョイリテイクセットアップを完成させるためのカスタムサーバーセッション。",
        mu_perf: "アビリティの使用が現在ピークレベルにある。アセントミッドでのフェイドのプレッシャーが継続的にデュエリストのアーリーピックを生み出している。",
        mu_improve: "時折、誤った読みによりアビリティを早く使いすぎる。序盤の情報収集よりも、エクスキュートのためにソーヴァのドローンを温存する必要がある。",
        mu_mental: "敗北を個人的に受け止め、アビリティのミスを自責する傾向がある。Valorantはチームゲームであり、すべての失ったラウンドがイニシエーターのミスではないことを再認識させる必要がある。非常にチーム志向の考え方。",
        mu_plan: "理論セッションで「アビリティエコノミー」の概念を復習。セカンダリーIGLとしての価値を強化。",
        wo_perf: "今週のアイスボックスでのヴァイパーの壁のタイミングに少し苦労したが、ヘイヴンでのオーメンのパフォーマンスは完璧だった。優れたマクロマップの理解。",
        wo_improve: "マイクロコールをデュエリストにもっと委任する必要がある。生き残りながらチームのポジションを過剰に管理することがフォーカスを低下させている。",
        wo_mental: "IGLの責任による燃え尽き症候群のリスクが高い。日曜日はValorantを一切しない完全な休養日を推奨。精神的疲労が後半ラウンドのショットコールに影響を与えている。",
        wo_plan: "序盤ラウンドのコール責任をmusashiに移行。VODなしの個人的な対話によるリラックスした1v1のチェックインをスケジュール。",
        yo_perf: "クラッチ勝率が大幅に向上した。練習でのメカニカルな安定性がスクリムによく反映されている。",
        yo_improve: "エクスキュート時のスペーシングにムラがある。確実にトレードするためには、デュエリストより前に行き過ぎたり、後ろに下がりすぎたりすることが多い。",
        yo_mental: "勢いのある状況では良いパフォーマンスを発揮するが、連敗中は静かになる。士気が低い時でも声掛けの存在感を維持する必要がある。",
        yo_plan: "明日のサーバー時間でのスペーシングドリル。自然なシナジーを構築するため、jannyxDとペアで2v2のリテイク演習。",
        modal_title: "バインド & ヘイヴン ゲームプラン",
        modal_subtitle: "戦術プレイブック • 作成者：Coach Tinder",
        modal_bind_title: "バインド: デフォルトとコントロール",
        modal_bind_a_short: "Aショートの条件付けとUホールのコントロール",
        modal_bind_a_short_desc: "Aショートのコントロールを取るのに苦労し、序盤のアグレッションでキルされている。今後は<strong>musashi(ソーヴァ)</strong>がAロングからスタートし、テレポートの屋根越しにリコンボルトを使ってUホールをクリアリングする。これにより序盤のピークを防ぎ、相手の防衛に反応を強いることができる。<strong>wolverine(オーメン)</strong>はヘヴンへのスモークをもっと早くすること。現在の遅れにより、相手のOPにフリーで撃たれる隙を与えている。",
        modal_bind_b_long: "Bロングエクスキュートの基礎",
        modal_bind_b_long_desc: "フッカーへのドライピークをやめること。ヴァイパーがスローウォールでBロングを抑え、エントリー部隊はフッカー内でスカイの犬によるクリアリングを待つ3-2スプリットを実行する。ここでは忍耐が鍵となる。",
        modal_haven_title: "ヘイヴン: 構成のバリエーションと基礎",
        modal_haven_desc: "このマクロサイクルでは、昨日の理論レビューで決定したヘイヴンの<strong>2つの異なる構成</strong>を使用する。どちらも異なるペースとテンポを活用するように設計されている。",
        modal_comp_a: "構成A: スタンダードデフォルト",
        modal_comp_a_tag: "コントロール＆情報",
        modal_fundamentals: "基礎:",
        modal_comp_a_fund: "パッシブなマップコントロール、キルジョイのセットアップによる強力な情報拒否。",
        modal_ct_pos: "CTポジショニング:",
        modal_comp_a_ct: "ジェットのOPはA/Cをフレックスに動く。キルジョイはガレージを固める。オーメンはCを固める。",
        modal_t_side: "Tサイドデフォルト:",
        modal_comp_a_t: "ブリーチのスタン＋ソーヴァのドローンクリアリングによるAロビーの確保。",
        modal_comp_b: "構成B: ダブルコントローラー",
        modal_comp_b_tag: "アグレッシブ",
        modal_comp_b_fund: "高速なエクスキュート、完全な視線(LOS)の拒否（ヴァイパーの壁）。",
        modal_comp_b_ct: "サイファーはCを固める。ヴァイパーはミッドに壁を張る。ネオンはフリーのローテーターとして動く。",
        modal_comp_b_t: "ヴァイパーのオーブとネオンのファーストレーンを利用したBラッシュ。",
        modal_garage_title: "ガレージのコントロールとリテイクプロトコル",
        modal_garage_desc: "防衛でのガレージへのドライピークをやめること。アラームボット/トラップワイヤーをミッドドアのより奥に設置し、素早く壊された場合はリテイクに備えること。ガレージの過剰なピークにより、40%の確率でファーストブラッドを失っている。リテイクでは人数の優位性を活かすこと（5v5の時のC/ガレージリテイク勝率は68%）。",
        modal_coach_note_title: "明日に向けてのコーチノート:",
        modal_coach_note_desc: "Karmine Corpとのスクリムの前の明日のサーバー時間で、これらのセットアップを徹底的に練習する。両方の構成での自分の特定の役割を読んで理解しておくこと。構成Bでの自分の動きに自信がない場合は、DMを送ること。"
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
        media_day: "提醒：周二是 VCT 的媒体日！将有新队服和罗技赞助商视频拍摄。请做好准备。",
        stat_winrate: "整体胜率",
        stat_attack: "进攻回合胜率",
        stat_defense: "防守回合胜率",
        stat_acs: "团队平均ACS",
        goals_daily: "每日焦点与目标",
        goals_weekly: "本周目标",
        goals_monthly: "本月目标",
        scrims_monthly: "月度概览",
        scrims_upcoming: "即将到来的会议",
        scrims_detailed: "详细的每周日程表",
        playbook_attack: "进攻 (T端)",
        playbook_defense: "防守 (CT端)",
        vods_feedback: "查看反馈与笔记",
        coach_perf: "表现趋势",
        coach_tactical: "战术焦点",
        coach_mental: "人性与心态",
        coach_action: "下一步行动计划",
        playbook_defaults: "默认战术",
        playbook_executes: "进攻执行",
        playbook_postplants: "安放后防守",
        playbook_pistols: "手枪局",
        playbook_retakes: "回防",
        playbook_antiecos: "反经济局",
        playbook_gameplan: "查看比赛计划",
        vods_positives: "优点",
        vods_coach_note: "教练笔记",
        vods_player_note: "玩家笔记",
        goals_today: "今天",
        goals_teamwork: "团队合作",
        goals_teamwork_desc: "改善安放后的被动与主动沟通",
        goals_duelists: "决斗者",
        goals_duelists_desc: "更具侵略性的比赛风格，致力于获得更多首杀",
        goals_controllers: "控场者",
        goals_controllers_desc: "提高烟雾效率，协调进入的时机",
        goals_initiators: "先锋",
        goals_initiators_desc: "注意不要在回合早期过快耗尽技能",
        goals_add: "添加新焦点",
        goals_current: "当前",
        goals_improve_haven: "改进隐世修所回防",
        goals_pistol: "手枪局的一致性",
        goals_scrims_tactical: "训练赛与战术",
        goals_fundamentals: "基础与沟通",
        goals_fundamentals_desc: "在安放后清晰沟通并保持干净的回防间距",
        goals_map_pool: "地图池与经济",
        goals_map_pool_desc: "将日落之城整合到地图池中，提高手枪局胜率",
        goals_officials_psychology: "官方比赛与心理学",
        goals_emotional_control: "情绪控制",
        goals_emotional_control_desc: "舞台上的冷静心态。保持动力但稳定——避免情绪大起大落。",
        goals_moral_support: "道德支持",
        goals_moral_support_desc: "积极鼓舞队友。始终注入积极情绪以在输掉回合后恢复势头。",
        goals_player_focus: "玩家焦点",
        goals_archived: "已归档",
        goals_archived_1: "修复绑定B防守轮换",
        goals_archived_2: "设置上升默认组合",
        goals_archived_3: "签约助理教练",
        vod_1_result: "胜利 13-10",
        vod_1_issue: "中路控制与补枪",
        vod_1_pos: "A大道的双拉非常棒。vo0kashu的KJ道具有效地拖延了B区。",
        vod_1_coach: "jannyxD需要等闪光弹爆了再从市场的烟雾中跳出来。",
        vod_1_player: "wolverine: 我在第5回合的烟雾给晚了，会改进的。",
        vod_2_result: "失败 9-13",
        vod_2_issue: "A区回防协调",
        vod_2_pos: "经济局打得不错。Yowamu的布奇闪光拉扯出了空间。",
        vod_2_coach: "A区回防失败是因为我们太轻易放弃了大厅的控制权。",
        vod_2_player: "musashi: 我会把无人机留到回防时用，而不是早期拿信息。",
        vod_3_result: "胜利 13-8",
        vod_3_issue: "碎石区压迫",
        vod_3_pos: "完美的早期碎石区控制。补枪非常到位。",
        vod_3_coach: "继续给A区碎石施压，但不要过度深入他们的出生点。",
        vod_3_player: "jannyxD: 今天主动找人对枪感觉非常顺手。",
        cal_vod: "VOD复盘",
        cal_exec: "进攻执行练习",
        cal_theory_bind: "源工重镇默认理论",
        cal_escape: "密室逃脱(团建)",
        cal_site_holds: "守点练习",
        cal_theory_ascent: "亚平宁回防理论",
        cal_vod_fnc: "FNATIC VOD复盘",
        cal_lotus_setup: "莲花古城道具布置",
        cal_feedback: "VOD反馈",
        cal_retake_drill: "裂变峡谷回防演练",
        cal_theory_ct: "CT/T阵营理论",
        cal_mental: "心态准备",
        cal_brainstorm: "头脑风暴",
        cal_media: "VCT媒体日",
        cal_ascent_exec: "亚平宁执行",
        cal_vod_kc: "对阵KC VOD",
        cal_theory_sunset: "日落之城理论",
        cal_gym: "健身与放松",
        dash_insight_time: "今天 10:45 AM",
        dash_insight_msg: "我们需要改善中路控制和1-3-1默认，以及我们明天会复盘的某些反应。我还想改变A区的守包（post-plant）。<br><br>我想开始实施在人数劣势时的触发词（trigger words）。",
        scrim_kc_title: "对阵 KC — 今天 20:00",
        scrim_kc_desc: "地图: 亚平宁, 源工重镇 · 重点: CT默认防守与T侧执行",
        scrim_badge_scrim: "训练赛",
        scrim_prac_title: "亚平宁执行演练 — 4月15日",
        scrim_prac_desc: "地图: 亚平宁 · 重点: A区夹击",
        scrim_badge_prac: "练习",
        scrim_badge_drills: "演练",
        scrim_badge_vod: "VOD",
        scrim_month: "2025年 4月",
        day_mon: "一",
        day_tue: "二",
        day_wed: "三",
        day_thu: "四",
        day_fri: "五",
        day_sat: "六",
        day_sun: "日",
        role_duelist: "决斗者",
        role_controller: "控场者",
        role_initiator: "先锋",
        role_sentinel: "守卫",
        role_flex: "补位",
        focus_duelist: "进场路线与冲刺时机",
        focus_controller: "执行进攻时的烟雾时机",
        focus_other: "技能使用与站位间距",
        jx_perf: "在过去的5场训练赛中持续创造了强大的进场空间。与上周相比，配合先锋闪光弹的进场时机有了显著提升。",
        jx_improve: "需要避免在团队拥有人数优势（如5打3）时进入自动驾驶状态。过度激进导致输掉了不必要的回合。需要认识到何时放慢节奏并稳固优势。",
        jx_mental: "在输掉前几个回合后容易迅速感到沮丧。应该在回合之间加入深呼吸/重置状态的习惯。在游戏之外似乎有点压力——确保有适当的休息和离开电脑的时间。",
        jx_plan: "专注于中局决策和优势情况处理的1v1 VOD复盘。",
        vo_perf: "极佳的守点稳定性。昨天在日落之城的零的防守布置彻底让GX哑火。与上个月相比，适应能力有了显著提高。",
        vo_improve: "轮转时的沟通仍然太安静。在离开守点位置去支援其他区域时，需要更清晰、更大声的指挥。",
        vo_mental: "情绪非常稳定，为团队提供了坚实的基础。确保他们的影响力得到认可，因为守卫的价值并不总是反映在计分板上。",
        vo_plan: "在自定义服务器中完善莲花古城的奇乐回防布置。",
        mu_perf: "目前的技能使用处于巅峰水平。在亚平宁中路用黑梦施加的压力持续为决斗者创造早期击杀。",
        mu_improve: "有时会基于错误的判断过早使用技能。需要保留猎枭的无人机用于执行进攻，而不是用于早期信息收集。",
        mu_mental: "把失败看得很重，并倾向于为技能失误自责。需要强调Valorant是一个团队游戏，并不是每个输掉的回合都是先锋的失误。非常有团队精神。",
        mu_plan: "在理论课上复习“技能经济学”概念。强化副指挥的价值。",
        wo_perf: "本周在森寒冬港的毒幕时机上有点挣扎，但在亚平宁上的幽影表现完美。宏观地图理解非常出色。",
        wo_improve: "需要把更多的微观指挥委派给决斗者。在保证存活的同时过度管理团队站位正在降低他的专注力。",
        wo_mental: "由于指挥责任，有很高的倦怠风险。建议周日完全休息，不打Valorant。精神疲劳正在影响后期回合的战术呼叫。",
        wo_plan: "将早期回合的指挥责任转移给musashi。安排一次轻松的1v1交流（不看VOD，只聊私人话题）。",
        yo_perf: "残局胜率有了显著提高。训练中的机械稳定性很好地转化到了训练赛中。",
        yo_improve: "执行进攻时的间距不稳定。经常跑在决斗者太前面或太后面，导致无法可靠地补枪。",
        yo_mental: "在顺风局表现很好，但在连败期间变得安静。需要即使在士气低落时也保持沟通。",
        yo_plan: "明天的服务器时间进行间距练习。与jannyxD组队进行2v2回防演练以培养自然默契。",
        modal_title: "源工重镇 & 亚平宁 比赛计划",
        modal_subtitle: "战术手册 • 由 Coach Tinder 准备",
        modal_bind_title: "源工重镇: 默认与控制",
        modal_bind_a_short: "A短道条件反射与U型通道控制",
        modal_bind_a_short_desc: "我们在控制A短道方面遇到困难，经常因为早期的激进尝试而丧命。从现在起，<strong>musashi（猎枭）</strong>将从A大开始，并将寻敌箭射过传送门屋顶以扫描U型通道。这能防止早期的对枪，并迫使他们的防守做出反应。<strong>wolverine（幽影）</strong>，你必须更早地在二楼封烟；目前的延迟让他们的大狙在撤退前有免费开枪的机会。",
        modal_bind_b_long: "B长道执行基础",
        modal_bind_b_long_desc: "停止干拉水烟室。我们将进行3-2分推，蝰蛇用慢速毒幕控制B大，而我们的进场小组则在水烟室内等待斯凯的辟除犬清理完毕。耐心是这里的关键。",
        modal_haven_title: "亚平宁: 阵容变化与基础",
        modal_haven_desc: "在这个宏观周期中，我们将在亚平宁上使用昨天理论复盘中确定的<strong>两套不同阵容</strong>。两者都旨在利用不同的节奏和速度。",
        modal_comp_a: "阵容A: 标准默认",
        modal_comp_a_tag: "控制与信息",
        modal_fundamentals: "基础:",
        modal_comp_a_fund: "被动的地图控制，通过奇乐的布置进行强力的信息拒止。",
        modal_ct_pos: "防守方站位:",
        modal_comp_a_ct: "捷风大狙在A和C之间灵活走位。奇乐死守车库。幽影死守C区。",
        modal_t_side: "进攻方默认:",
        modal_comp_a_t: "通过布奇的震击加上猎枭的无人机清理来控制A大厅。",
        modal_comp_b: "阵容B: 双控场者",
        modal_comp_b_tag: "激进",
        modal_comp_b_fund: "快速执行进攻，完全的视线（LOS）拒止（蝰蛇毒幕）。",
        modal_comp_b_ct: "零死守C区。蝰蛇在中间起毒幕。霓虹作为自由位游走。",
        modal_comp_b_t: "利用蝰蛇的毒气球和霓虹的快车道进行B区爆弹。",
        modal_garage_title: "车库控制与回防协议",
        modal_garage_desc: "在防守时停止干拉车库。将你的报警机器人/绊线放得更深一些（在中门），如果它们被快速破坏就准备回防。过度探头车库导致我们有40%的时间交出首杀。让我们在回防时发挥人数优势（我们在5打5时的C区/车库回防胜率为68%）。",
        modal_coach_note_title: "明天教练笔记:",
        modal_coach_note_desc: "在对阵 Karmine Corp 的训练赛之前，我们将在明天的服务器时间大量练习这些战术布置。请仔细阅读并内化你在两套阵容中的特定特务角色。如果你对自己在阵容B中的路线不确定，请私信我。"
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
        media_day: "알림: 화요일은 VCT 미디어 데이입니다! 새로운 유니폼과 로지텍 스폰서 비디오 촬영이 있습니다. 준비해 주세요.",
        stat_winrate: "전체 승률",
        stat_attack: "공격 라운드 승률",
        stat_defense: "방어 라운드 승률",
        stat_acs: "팀 평균 ACS",
        goals_daily: "일일 초점 및 목표",
        goals_weekly: "주간 목표",
        goals_monthly: "월간 목표",
        scrims_monthly: "월간 개요",
        scrims_upcoming: "다가오는 세션",
        scrims_detailed: "세부 주간 일정",
        playbook_attack: "공격 (T 사이드)",
        playbook_defense: "방어 (CT 사이드)",
        vods_feedback: "피드백 및 노트 보기",
        coach_perf: "성과 추세",
        coach_tactical: "전술적 초점",
        coach_mental: "인간성 및 멘탈",
        coach_action: "다음 행동 계획",
        playbook_defaults: "기본 전술",
        playbook_executes: "실행 전술",
        playbook_postplants: "설치 후 방어",
        playbook_pistols: "피스톨 라운드",
        playbook_retakes: "리테이크",
        playbook_antiecos: "안티 에코",
        playbook_gameplan: "게임 플랜 보기",
        vods_positives: "긍정적인 점",
        vods_coach_note: "코치 노트",
        vods_player_note: "선수 노트",
        goals_today: "오늘",
        goals_teamwork: "팀워크",
        goals_teamwork_desc: "포스트 플랜트에서 수동적/능동적 의사소통 개선",
        goals_duelists: "타격대",
        goals_duelists_desc: "더 공격적인 플레이 스타일, 오프닝 킬에 헌신",
        goals_controllers: "전략가",
        goals_controllers_desc: "연막 효율 향상, 진입 타이밍 조율",
        goals_initiators: "척후대",
        goals_initiators_desc: "라운드 초반에 스킬을 너무 빨리 낭비하지 않도록 주의",
        goals_add: "새로운 초점 추가",
        goals_current: "현재",
        goals_improve_haven: "헤이븐 리테이크 개선",
        goals_pistol: "피스톨 라운드 일관성",
        goals_scrims_tactical: "스크림 및 전술",
        goals_fundamentals: "기초 및 의사소통",
        goals_fundamentals_desc: "설치 후 명확한 의사소통과 깔끔한 리테이크 간격",
        goals_map_pool: "맵 풀 및 경제",
        goals_map_pool_desc: "선셋을 맵 풀에 통합하고 피스톨 승률을 높임",
        goals_officials_psychology: "공식전 및 심리학",
        goals_emotional_control: "감정 조절",
        goals_emotional_control_desc: "냉철한 멘탈. 동기를 유지하되 안정적으로-감정 기복 방지.",
        goals_moral_support: "정신적 지원",
        goals_moral_support_desc: "팀원들을 적극적으로 응원. 항상 긍정적인 태도 유지.",
        goals_player_focus: "선수 초점",
        goals_archived: "보관됨",
        goals_archived_1: "바인드 B 방어 로테이션 수정",
        goals_archived_2: "어센트 기본 조합 설정",
        goals_archived_3: "보조 코치 영입",
        vod_1_result: "승리 13-10",
        vod_1_issue: "미드 컨트롤 및 트레이드",
        vod_1_pos: "A 메인에서 훌륭한 더블 픽. vo0kashu의 KJ 셋업이 B를 효과적으로 지연시킴.",
        vod_1_coach: "jannyxD는 마켓 연막에서 뛰어나오기 전에 플래시를 기다려야 함.",
        vod_1_player: "wolverine: 5라운드 연막이 늦었음, 수정하겠음.",
        vod_2_result: "패배 9-13",
        vod_2_issue: "A 리테이크 조정",
        vod_2_pos: "에코 라운드가 좋았음. Yowamu의 브리치 플래시가 공간을 확보함.",
        vod_2_coach: "우리가 로비를 너무 쉽게 포기하기 때문에 A-리테이크가 실패함.",
        vod_2_player: "musashi: 초기 정보 대신 리테이크를 위해 드론을 아껴두겠음.",
        vod_3_result: "승리 13-8",
        vod_3_issue: "러블 공격성",
        vod_3_pos: "완벽한 초기 러블 컨트롤. 트레이드가 정확했음.",
        vod_3_coach: "A 러블에 계속 압박을 가하되, 상대 스폰까지 너무 깊게 들어가지 말 것.",
        vod_3_player: "jannyxD: 오늘 공격적인 듀얼을 하는 것이 매우 편안했음.",
        cal_vod: "VOD 리뷰",
        cal_exec: "실행 연습",
        cal_theory_bind: "바인드 기본 이론",
        cal_escape: "방탈출",
        cal_site_holds: "사이트 수비 연습",
        cal_theory_ascent: "어센트 리테이크 이론",
        cal_vod_fnc: "FNATIC VOD 리뷰",
        cal_lotus_setup: "로터스 셋업",
        cal_feedback: "VOD 피드백",
        cal_retake_drill: "스플릿 리테이크 드릴",
        cal_theory_ct: "CT/T 사이드 이론",
        cal_mental: "멘탈 준비",
        cal_brainstorm: "브레인스토밍",
        cal_media: "VCT 미디어 데이",
        cal_ascent_exec: "어센트 실행",
        cal_vod_kc: "vs KC VOD",
        cal_theory_sunset: "선셋 이론",
        cal_gym: "짐 & 휴식",
        dash_insight_time: "오늘 10:45 AM",
        dash_insight_msg: "미드 컨트롤과 1-3-1 기본 배치, 내일 리뷰할 특정 리액션들을 개선해야 함. 또한 A 포스트 플랜트도 변경하고 싶음.<br><br>수적 열세일 때 사용할 트리거 워드를 도입하기 시작했으면 함.",
        scrim_kc_title: "vs KC — 오늘 20:00",
        scrim_kc_desc: "맵: 어센트, 바인드 · 포커스: CT에서의 기본 배치 및 T 사이드에서의 실행",
        scrim_badge_scrim: "스크림",
        scrim_prac_title: "어센트 실행 드릴 — 4월 15일",
        scrim_prac_desc: "맵: 어센트 · 포커스: A 사이트 스플릿",
        scrim_badge_prac: "연습",
        scrim_badge_drills: "드릴",
        scrim_badge_vod: "VOD",
        scrim_month: "2025년 4월",
        day_mon: "월",
        day_tue: "화",
        day_wed: "수",
        day_thu: "목",
        day_fri: "금",
        day_sat: "토",
        day_sun: "일",
        role_duelist: "타격대",
        role_controller: "전략가",
        role_initiator: "척후대",
        role_sentinel: "감시자",
        role_flex: "플렉스",
        focus_duelist: "진입 경로 및 대시 타이밍",
        focus_controller: "실행 시 연막 타이밍",
        focus_other: "스킬 사용 및 스페이싱",
        jx_perf: "최근 5번의 스크림에서 지속적으로 강력한 진입 공간을 창출함. 지난주에 비해 척후대 플래시와 맞춘 진입 타이밍이 크게 향상됨.",
        jx_improve: "팀이 수적 우위(예: 5v3 상황)일 때 무지성 플레이를 피해야 함. 과도한 공격성으로 인해 불필요한 라운드를 내주고 있음. 템포를 늦추고 이점을 확보해야 할 때를 인지해야 함.",
        jx_mental: "첫 몇 라운드를 지고 나면 빨리 좌절하는 경향이 있음. 라운드 사이에 호흡/리셋 루틴을 도입해야 함. 게임 외적으로 스트레스를 받는 것 같으니 적절한 휴식을 취하게 할 것.",
        jx_plan: "미드 라운드 의사 결정과 우위 상황 플레이에 중점을 둔 1v1 VOD 리뷰.",
        vo_perf: "앵커로서의 일관성이 뛰어남. 어제 선셋에서의 사이퍼 셋업은 GX를 완전히 차단함. 지난달에 비해 적응력이 눈에 띄게 향상됨.",
        vo_improve: "로테이션 중 의사소통이 여전히 너무 조용함. 다른 사이트를 지원하기 위해 앵커 포지션을 떠날 때 더 명확하고 큰 목소리로 브리핑이 필요함.",
        vo_mental: "감정적으로 매우 안정적이며 팀에 강력한 안정감을 제공함. 감시자의 가치가 항상 점수판에 반영되는 것은 아니므로 그들의 기여를 인정해 주어야 함.",
        vo_plan: "로터스에서 킬조이 리테이크 셋업을 마무리하기 위한 커스텀 서버 세션.",
        mu_perf: "스킬 활용이 현재 최고조에 달해 있음. 어센트 미드에서의 페이드 압박은 듀얼리스트들에게 지속적으로 초기 킬을 만들어줌.",
        mu_improve: "때때로 잘못된 판단으로 스킬을 너무 일찍 사용함. 소바 드론을 초반 정보 수집보다는 본격적인 공격 실행을 위해 아껴두어야 함.",
        mu_mental: "패배를 개인적인 탓으로 돌리고 스킬 사용에 대해 자책하는 경향이 있음. 발로란트는 팀 게임이며 잃어버린 모든 라운드가 척후대의 실수가 아님을 상기시켜야 함. 팀 지향적 마인드.",
        mu_plan: "이론 세션에서 '스킬 경제' 개념 복습. 서브 오더로서의 가치 강화.",
        wo_perf: "이번 주 아이스박스에서 바이퍼 장막 타이밍에 약간 어려움을 겪었지만, 헤이븐에서의 오멘 플레이는 결점이 없었음. 거시적인 맵 이해도가 뛰어남.",
        wo_improve: "세부 오더를 타격대에게 더 위임해야 함. 살아남으면서 팀 포지셔닝을 과도하게 관리하려다 보니 집중력이 떨어짐.",
        wo_mental: "오더 책임으로 인한 번아웃 위험이 높음. 일요일에는 발로란트를 하지 않고 완전한 휴식을 취할 것을 권장. 정신적 피로가 후반 라운드 오더에 영향을 미치고 있음.",
        wo_plan: "초반 라운드 오더 책임을 musashi에게 넘김. 편안한 1v1 개인 면담 일정 잡기.",
        yo_perf: "클러치 승률이 크게 향상됨. 연습에서의 메카니컬한 일관성이 스크림에서도 잘 나타남.",
        yo_improve: "공격 실행 시 스페이싱이 일관적이지 않음. 트레이드를 하기에는 타격대보다 너무 앞서거나 너무 뒤처지는 경우가 많음.",
        yo_mental: "분위기를 탈 때는 좋은 성과를 내지만 연패 중에는 조용해짐. 사기가 낮을 때도 브리핑을 유지해야 함。",
        yo_plan: "내일 서버 훈련 시간에 스페이싱 드릴 진행. 자연스러운 시너지를 구축하기 위해 jannyxD와 2v2 리테이크 연습 진행.",
        modal_title: "바인드 & 헤이븐 게임플랜",
        modal_subtitle: "전술 플레이북 • 작성자: Coach Tinder",
        modal_bind_title: "바인드: 기본 및 컨트롤",
        modal_bind_a_short: "A 숏 길들이기 및 U-홀 컨트롤",
        modal_bind_a_short_desc: "우리는 A 숏 컨트롤을 확보하는 데 어려움을 겪고 초반 무리한 공격에 죽고 있음. 이제부터 <strong>musashi(소바)</strong>는 A 롱에서 시작하여 텔레포터 지붕 위로 리콘 볼트를 날려 U-홀을 스캔할 것. 이는 초반 픽을 방지하고 상대 수비가 반응하도록 강제함. <strong>wolverine(오멘)</strong>, 헤븐에 연막을 더 일찍 쳐야 함; 현재의 지연은 상대 오퍼가 빠지기 전에 프리 샷을 쏠 기회를 주고 있음.",
        modal_bind_b_long: "B 롱 실행 기본 사항",
        modal_bind_b_long_desc: "후카에서 드라이 픽 금지. 바이퍼가 느린 장막으로 B 롱을 홀드하고 진입조가 후카 안에서 스카이 개 클리어를 기다리는 3-2 스플릿을 실행할 것. 여기서 인내가 핵심임.",
        modal_haven_title: "헤이븐: 조합 변형 및 기본 사항",
        modal_haven_desc: "이번 매크로 사이클에서는 어제 이론 리뷰에서 확정한 헤이븐의 <strong>두 가지 다른 조합</strong>을 운영할 예정임. 둘 다 다른 템포와 속도를 활용하도록 설계됨.",
        modal_comp_a: "조합 A: 표준 기본",
        modal_comp_a_tag: "컨트롤 & 정보",
        modal_fundamentals: "기본 사항:",
        modal_comp_a_fund: "수동적인 맵 컨트롤, 킬조이 셋업을 통한 강력한 정보 차단.",
        modal_ct_pos: "CT 포지셔닝:",
        modal_comp_a_ct: "제트 오퍼가 A/C를 유동적으로 오감. 킬조이는 차고에 앵커. 오멘은 C 앵커.",
        modal_t_side: "T-사이드 기본:",
        modal_comp_a_t: "브리치 스턴 + 소바 드론 클리어로 A 로비 장악.",
        modal_comp_b: "조합 B: 투 스모크",
        modal_comp_b_tag: "공격적",
        modal_comp_b_fund: "빠른 실행, 완전한 시야(LOS) 차단 (바이퍼 장막).",
        modal_comp_b_ct: "사이퍼는 C 앵커. 바이퍼는 미드 장막. 네온은 자유로운 로테이터 역할.",
        modal_comp_b_t: "바이퍼 구슬과 네온의 릴레이 볼트를 활용한 B 버스트.",
        modal_garage_title: "차고 컨트롤 및 리테이크 프로토콜",
        modal_garage_desc: "수비 시 차고 드라이 픽 금지. 알람봇/트랩와이어를 미드 도어 안쪽 깊숙이 설치하고, 빨리 부서지면 리테이크를 노릴 것. 차고에서의 무리한 픽오프 시도로 40% 확률로 퍼스트 블러드를 내주고 있음. 수적 우위를 살려 리테이크를 할 것 (5v5 상황에서 우리의 C/차고 리테이크 승률은 68%임).",
        modal_coach_note_title: "내일 코치 노트:",
        modal_coach_note_desc: "Karmine Corp과의 스크림 전, 내일 서버 훈련 시간에 이 셋업들을 집중적으로 연습할 것. 두 조합에 대한 본인의 구체적인 요원 역할을 읽고 숙지할 것. 조합 B에서 자신의 동선이 불확실하다면 DM 줄 것."
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
                            <h3 style="color: white; margin: 0; font-size: 1.3rem;">${t('modal_title', 'Bind & Haven Gameplan')}</h3>
                            <div style="color: var(--text-secondary); font-size: 0.8rem; margin-top: 3px;">${t('modal_subtitle', 'Tactical Playbook • Prepared by Coach Tinder')}</div>
                        </div>
                    </div>
                    <i class="fa-solid fa-xmark" style="color: var(--text-secondary); font-size: 1.5rem; cursor: pointer; transition: 0.2s;" onclick="document.getElementById('gameplan-modal').remove()" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'"></i>
                </div>
                
                <div style="flex: 1; padding: 2.5rem; overflow-y: auto; color: #cbd5e1; font-family: 'Inter', sans-serif; line-height: 1.7;">
                    
                    <!-- BIND SECTION -->
                    <div style="margin-bottom: 3rem;">
                        <h2 style="color: white; border-bottom: 2px solid var(--accent-red); padding-bottom: 10px; display: inline-block; margin-bottom: 1.5rem;"><i class="fa-solid fa-map-location-dot" style="margin-right: 10px; color: var(--accent-red);"></i>${t('modal_bind_title', 'Bind: Default & Control')}</h2>
                        
                        <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; border-left: 3px solid #60a5fa;">
                            <h4 style="color: white; margin: 0 0 10px 0;">${t('modal_bind_a_short', 'A-Short Conditionings & U-Hall Control')}</h4>
                            <p style="margin: 0;">${t('modal_bind_a_short_desc', 'We are struggling with taking A Short control and dying to early aggression. From now on, <strong>musashi (Sova)</strong> will start A long and use the recon bolt over the teleporter roof to scan U-hall. This prevents the early peek and forces their defense to react. <strong>wolverine (Omen)</strong>, you must smoke Heaven earlier; the current delay is allowing their OP to take a free shot before retreating.')}</p>
                        </div>
                        
                        <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 1.5rem; border-left: 3px solid #fcd34d;">
                            <h4 style="color: white; margin: 0 0 10px 0;">${t('modal_bind_b_long', 'B-Long Exec Fundamentals')}</h4>
                            <p style="margin: 0;">${t('modal_bind_b_long_desc', 'Stop dry-peeking Hookah. We will run a 3-2 split where Viper holds B Long with a slow wall, while our entry package waits for the Skye dog clear inside Hookah. Patience is key here.')}</p>
                        </div>
                    </div>

                    <!-- HAVEN SECTION -->
                    <div>
                        <h2 style="color: white; border-bottom: 2px solid #00bcd4; padding-bottom: 10px; display: inline-block; margin-bottom: 1.5rem;"><i class="fa-solid fa-map" style="margin-right: 10px; color: #00bcd4;"></i>${t('modal_haven_title', 'Haven: Comp Variations & Fundamentals')}</h2>
                        <p style="margin-bottom: 2rem;">${t('modal_haven_desc', "For this macro-cycle, we'll be running <strong>two different comps</strong> on Haven that we locked in during yesterday's theory review. Both are designed to exploit different pacing and tempos.")}</p>

                        <!-- COMPS -->
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; margin-bottom: 2.5rem;">
                            
                            <!-- COMP A -->
                            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 1.5rem;">
                                <h4 style="color: white; margin: 0 0 15px 0; display: flex; align-items: center; justify-content: space-between;">
                                    ${t('modal_comp_a', 'Comp A: Standard Default')} <span style="background: rgba(59, 130, 246, 0.2); color: #93c5fd; padding: 3px 8px; border-radius: 4px; font-size: 0.7rem;">${t('modal_comp_a_tag', 'Control & Info')}</span>
                                </h4>
                                <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 15px;">
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #f87171; border: 1px solid rgba(248,113,113,0.3);">JETT</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #60a5fa; border: 1px solid rgba(96,165,250,0.3);">SOVA</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #c084fc; border: 1px solid rgba(192,132,252,0.3);">OMEN</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #facc15; border: 1px solid rgba(250,204,21,0.3);">KILLJOY</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #60a5fa; border: 1px solid rgba(96,165,250,0.3);">BREACH</div>
                                </div>
                                <ul style="padding-left: 20px; margin: 0; font-size: 0.85rem; color: #94a3b8; line-height: 1.5;">
                                    <li style="margin-bottom: 6px;"><strong style="color: white;">${t('modal_fundamentals', 'Fundamentals:')}</strong> ${t('modal_comp_a_fund', 'Passive map control, heavy info denial with KJ setups.')}</li>
                                    <li style="margin-bottom: 6px;"><strong style="color: white;">${t('modal_ct_pos', 'CT Positioning:')}</strong> ${t('modal_comp_a_ct', 'Jett OP flexes A/C. KJ hard anchors Garage. Omen anchors C.')}</li>
                                    <li><strong style="color: white;">${t('modal_t_side', 'T-Side Defaults:')}</strong> ${t('modal_comp_a_t', 'A Lobby take with Breach stun + Sova drone clear.')}</li>
                                </ul>
                            </div>

                            <!-- COMP B -->
                            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 1.5rem;">
                                <h4 style="color: white; margin: 0 0 15px 0; display: flex; align-items: center; justify-content: space-between;">
                                    ${t('modal_comp_b', 'Comp B: Double Controller')} <span style="background: rgba(248, 113, 113, 0.2); color: #fca5a5; padding: 3px 8px; border-radius: 4px; font-size: 0.7rem;">${t('modal_comp_b_tag', 'Aggressive')}</span>
                                </h4>
                                <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 15px;">
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #f87171; border: 1px solid rgba(248,113,113,0.3);">NEON</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #60a5fa; border: 1px solid rgba(96,165,250,0.3);">FADE</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #c084fc; border: 1px solid rgba(192,132,252,0.3);">OMEN</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #4ade80; border: 1px solid rgba(74,222,128,0.3);">VIPER</div>
                                    <div style="background: #1e293b; padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; color: #facc15; border: 1px solid rgba(250,204,21,0.3);">CYPHER</div>
                                </div>
                                <ul style="padding-left: 20px; margin: 0; font-size: 0.85rem; color: #94a3b8; line-height: 1.5;">
                                    <li style="margin-bottom: 6px;"><strong style="color: white;">${t('modal_fundamentals', 'Fundamentals:')}</strong> ${t('modal_comp_b_fund', 'Fast execs, total LOS denial (Viper Wall).')}</li>
                                    <li style="margin-bottom: 6px;"><strong style="color: white;">${t('modal_ct_pos', 'CT Positioning:')}</strong> ${t('modal_comp_b_ct', 'Cypher anchors C. Viper walls Mid. Neon plays free rotator.')}</li>
                                    <li><strong style="color: white;">${t('modal_t_side', 'T-Side Defaults:')}</strong> ${t('modal_comp_b_t', 'B bursts with Viper orb and Neon Fast-lane.')}</li>
                                </ul>
                            </div>
                            
                        </div>

                        <div style="background: rgba(255,255,255,0.03); border-radius: 8px; padding: 1.5rem; margin-bottom: 1.5rem; border-left: 3px solid #f87171;">
                            <h4 style="color: white; margin: 0 0 10px 0;">${t('modal_garage_title', 'Garage Control & Retake Protocol')}</h4>
                            <p style="margin: 0;">${t('modal_garage_desc', "Stop dry-peeking Garage on defense. Set your alarmbot/trapwires deeper in mid doors, and play for retake if they break it fast. Over-peeking Garage is costing us first blood 40% of the time. Let's play our numbers advantage for retakes (our C/Garage retake winrate is 68% when playing 5v5).")}</p>
                        </div>
                    </div>
                    
                    <div style="margin-top: 3.5rem; background: rgba(255, 70, 85, 0.1); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--accent-red); display: flex; align-items: flex-start; gap: 15px;">
                        <i class="fa-solid fa-circle-exclamation" style="color: var(--accent-red); font-size: 1.5rem; margin-top: 2px;"></i>
                        <div>
                            <strong style="color: white; display: block; margin-bottom: 5px;">${t('modal_coach_note_title', 'Coach Note for Tomorrow:')}</strong> 
                            ${t('modal_coach_note_desc', "We will practice these setups extensively in tomorrow's server time before the Karmine Corp scrim. Please read and internalize your specific agent role for both comps. If you're unsure about your pathing in Comp B, DM me.")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
};

window.renderVodList = function() {
    const container = document.getElementById('vod-list-container');
    if(!container) return;

    const mapFilter = document.getElementById('filter-map')?.value || 'all';
    const resultFilter = document.getElementById('filter-result')?.value || 'all';
    const typeFilter = document.getElementById('filter-type')?.value || 'all';
    const search = (document.getElementById('vod-search')?.value || '').toLowerCase();

    let vods = getMockVods();
    
    vods = vods.filter(v => {
        if(mapFilter !== 'all' && v.map !== mapFilter) return false;
        if(resultFilter !== 'all' && !v.result.includes(resultFilter)) return false;
        if(typeFilter !== 'all' && v.matchType !== typeFilter) return false;
        if(search) {
            const query = search;
            if(!v.opponent.toLowerCase().includes(query) && 
               !v.map.toLowerCase().includes(query) && 
               !v.issue.toLowerCase().includes(query)) {
                return false;
            }
        }
        return true;
    });

    const getAgentIcon = (agent) => {
        const agentFormatted = agent.replace('/', '').toLowerCase();
        const agentUrls = {
            jett: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png",
            killjoy: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/displayicon.png",
            raze: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png",
            breach: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png",
            fade: "https://media.valorant-api.com/agents/dade69b4-415a-8cb1-65ce-0b8ce569b536/displayicon.png",
            viper: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/displayicon.png",
            skye: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/displayicon.png",
            brimstone: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/displayicon.png",
            reyna: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/displayicon.png"
        };
        const fallbackSrc = agentUrls[agentFormatted] || 'https://media.valorant-api.com/agents/displayicon.png';
        return `<div title="${agent}" style="width: 28px; height: 28px; border-radius: 50%; background: #1e293b; border: 1px solid rgba(255,255,255,0.2); display: flex; justify-content: center; align-items: center; font-size: 0.65rem; font-weight: bold; color: white; margin-right: -8px; position: relative; box-shadow: -2px 0 5px rgba(0,0,0,0.3); overflow: hidden;">
            <img src="../${agentFormatted}.png" style="width: 100%; height: 100%; object-fit: cover;" onerror="if(!this.dataset.retried) { this.dataset.retried = 'true'; this.src = '${fallbackSrc}'; } else { this.style.display='none'; this.nextElementSibling.style.display='flex'; }" alt="${agent}">
            <span style="display: none; align-items: center; justify-content: center; width: 100%; height: 100%;">${agent.substring(0,2).toUpperCase()}</span>
        </div>`;
    };

    if(vods.length === 0) {
        container.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 3rem; background: var(--bg-card); border-radius: 8px;">No matches found matching filters.</div>`;
        return;
    }

    container.innerHTML = vods.map(v => `
        <div style="background: var(--bg-card); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; overflow: hidden; display: flex; cursor: pointer; transition: 0.2s;" onmouseover="this.style.borderColor='rgba(255, 70, 85, 0.4)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.05)'" onclick="window.openVodReview(${v.id})">
            
            <div style="width: 200px; background: #111; position: relative; display: flex; justify-content: center; align-items: center; border-right: 1px solid rgba(255,255,255,0.05); flex-shrink: 0;">
                <i class="fa-solid fa-play" style="font-size: 2.5rem; color: rgba(255,255,255,0.3);"></i>
                <div style="position: absolute; bottom: 8px; right: 8px; background: rgba(0,0,0,0.8); padding: 3px 6px; font-size: 0.7rem; border-radius: 4px; color: white;">Patch ${v.patch}</div>
                <div style="position: absolute; top: 8px; left: 8px; background: ${v.matchType === 'Official' ? 'rgba(239, 68, 68, 0.8)' : 'rgba(59, 130, 246, 0.8)'}; padding: 3px 6px; font-size: 0.7rem; border-radius: 4px; color: white; font-weight: bold;">${v.matchType}</div>
            </div>

            <div style="padding: 1.2rem; flex: 1; display: flex; flex-direction: column; justify-content: center;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <h4 style="color: white; font-size: 1.2rem; margin: 0;">vs ${v.opponent} <span style="color: var(--text-secondary); font-size: 0.9rem; font-weight: normal; margin-left: 5px;">on ${v.map}</span></h4>
                    <span style="font-weight: bold; font-size: 1rem; color: ${v.result.includes('Win') ? 'var(--success)' : 'var(--danger)'};">${v.result}</span>
                </div>
                
                <div style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 12px; display: flex; gap: 15px;">
                    <span><i class="fa-regular fa-calendar"></i> ${v.date}</span>
                    <span style="color: #cbd5e1;"><i class="fa-solid fa-crosshairs" style="color: var(--accent-red);"></i> Focus: ${v.issue}</span>
                </div>

                <div style="display: flex; align-items: center; gap: 15px;">
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 0.75rem; color: var(--success); font-weight: bold;">${t('team_label', 'OUR TEAM:')}</span>
                        <div style="display: flex; padding-right: 8px;">
                            ${v.comps.team.map(agent => getAgentIcon(agent)).join('')}
                        </div>
                    </div>
                    <div style="color: var(--text-secondary); font-size: 0.8rem; font-weight: bold; font-style: italic;">VS</div>
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 0.75rem; color: var(--danger); font-weight: bold;">${t('enemy_label', 'ENEMY:')}</span>
                        <div style="display: flex; padding-right: 8px;">
                            ${v.comps.enemy.map(agent => getAgentIcon(agent)).join('')}
                        </div>
                    </div>
                </div>
            </div>

            <div style="width: 50px; display: flex; justify-content: center; align-items: center; border-left: 1px solid rgba(255,255,255,0.05); background: rgba(0,0,0,0.1);">
                <i class="fa-solid fa-chevron-right" style="color: var(--text-secondary);"></i>
            </div>
        </div>
    `).join('');
};

window.openVodReview = function(id) {
    const vod = getMockVods().find(v => v.id === id);
    if(!vod) return;

    const modalHTML = `
        <div id="vod-review-modal" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: var(--bg-primary); z-index: 2500; display: flex; flex-direction: column; overflow-y: auto;">
            
            <!-- Header -->
            <div style="padding: 1.5rem 3rem; background: var(--bg-secondary); border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center; position: sticky; top: 0; z-index: 10;">
                <div style="display: flex; align-items: center; gap: 20px;">
                    <button onclick="document.getElementById('vod-review-modal').remove()" style="background: transparent; border: 1px solid rgba(255,255,255,0.2); color: white; width: 40px; height: 40px; border-radius: 50%; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='transparent'"><i class="fa-solid fa-arrow-left"></i></button>
                    <div>
                        <h2 style="color: white; margin: 0; font-size: 1.5rem;">vs ${vod.opponent} <span style="color: var(--text-secondary); font-weight: normal;">(${vod.map})</span></h2>
                        <div style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px;">${vod.date} • Patch ${vod.patch} • ${vod.matchType}</div>
                    </div>
                </div>
                <div style="display: flex; gap: 15px; align-items: center;">
                    <div style="background: rgba(255,255,255,0.05); padding: 8px 15px; border-radius: 6px; color: ${vod.result.includes('Win') ? 'var(--success)' : 'var(--danger)'}; font-weight: bold;">${vod.result}</div>
                </div>
            </div>

            <!-- Content -->
            <div style="display: flex; flex: 1; padding: 2rem 3rem; gap: 2rem; max-width: 1600px; margin: 0 auto; width: 100%; box-sizing: border-box; flex-wrap: wrap;">
                
                <!-- Left Column (Video + Notes) -->
                <div style="flex: 2; display: flex; flex-direction: column; gap: 1.5rem; min-width: 300px;">
                    
                    <!-- Video Player -->
                    <div style="width: 100%; aspect-ratio: 16/9; background: #000; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; position: relative;">
                        <!-- Placeholder for Embedded Player -->
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); display: flex; flex-direction: column; align-items: center; color: var(--text-secondary);">
                            <i class="fa-brands fa-youtube" style="font-size: 4rem; margin-bottom: 15px; color: rgba(255,255,255,0.2);"></i>
                            <span style="font-size: 1.1rem;">VOD Player Embedded Here</span>
                            <span style="font-size: 0.85rem; margin-top: 5px;">(Simulated Video Link)</span>
                        </div>
                    </div>

                    <!-- Feedback Breakdown -->
                    <div style="background: var(--bg-card); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); padding: 1.5rem;">
                        <h3 style="color: white; margin: 0 0 1.2rem 0; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px;"><i class="fa-solid fa-clipboard-check" style="color: var(--accent-red); margin-right: 8px;"></i> Structured Feedback</h3>
                        
                        <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                            <div style="background: rgba(16, 185, 129, 0.05); border-left: 3px solid var(--success); padding: 1rem; border-radius: 0 8px 8px 0;">
                                <strong style="color: var(--success); display: block; margin-bottom: 6px;"><i class="fa-solid fa-plus"></i> Positives</strong>
                                <span style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.5;">${vod.positives}</span>
                            </div>
                            <div style="background: rgba(250, 204, 21, 0.05); border-left: 3px solid #fcd34d; padding: 1rem; border-radius: 0 8px 8px 0;">
                                <strong style="color: #fcd34d; display: block; margin-bottom: 6px;"><i class="fa-solid fa-user-tie"></i> Coach's Note</strong>
                                <span style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.5;">${vod.coachNote}</span>
                            </div>
                            <div style="background: rgba(139, 92, 246, 0.05); border-left: 3px solid #c4b5fd; padding: 1rem; border-radius: 0 8px 8px 0;">
                                <strong style="color: #c4b5fd; display: block; margin-bottom: 6px;"><i class="fa-solid fa-gamepad"></i> Player Insights</strong>
                                <span style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.5;">${vod.playerNote}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Right Column (Timeline & Comps) -->
                <div style="flex: 1; display: flex; flex-direction: column; gap: 1.5rem; min-width: 320px;">
                    
                    <!-- Comps -->
                    <div style="background: var(--bg-card); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); padding: 1.5rem;">
                        <h3 style="color: white; margin: 0 0 1rem 0; font-size: 1.1rem;">Team Compositions</h3>
                        
                        <div style="margin-bottom: 1rem;">
                            <div style="color: var(--success); font-size: 0.8rem; font-weight: bold; margin-bottom: 8px;">OUR TEAM</div>
                            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                                ${vod.comps.team.map(a => `<span style="background: rgba(16, 185, 129, 0.1); color: #6ee7b7; border: 1px solid rgba(16, 185, 129, 0.3); padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold;">${a}</span>`).join('')}
                            </div>
                        </div>
                        
                        <div>
                            <div style="color: var(--danger); font-size: 0.8rem; font-weight: bold; margin-bottom: 8px;">OPPONENT</div>
                            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                                ${vod.comps.enemy.map(a => `<span style="background: rgba(239, 68, 68, 0.1); color: #fca5a5; border: 1px solid rgba(239, 68, 68, 0.3); padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold;">${a}</span>`).join('')}
                            </div>
                        </div>
                    </div>

                    <!-- Timeline System -->
                    <div style="background: var(--bg-card); border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); padding: 1.5rem; flex: 1; display: flex; flex-direction: column; max-height: 500px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px;">
                            <h3 style="color: white; margin: 0; font-size: 1.1rem;"><i class="fa-solid fa-list-ul" style="color: #60a5fa; margin-right: 8px;"></i> VOD Timeline</h3>
                            <button style="background: transparent; color: #60a5fa; border: none; cursor: pointer; font-size: 0.85rem;"><i class="fa-solid fa-plus"></i> Add Note</button>
                        </div>
                        
                        <div style="display: flex; flex-direction: column; gap: 10px; overflow-y: auto; padding-right: 5px;">
                            ${vod.timeline.map(t => `
                                <div style="display: flex; gap: 12px; padding: 10px; border-radius: 6px; background: rgba(0,0,0,0.2); cursor: pointer; transition: 0.2s; border: 1px solid transparent;" onmouseover="this.style.borderColor='rgba(255,255,255,0.1)'; this.style.background='rgba(255,255,255,0.03)'" onmouseout="this.style.borderColor='transparent'; this.style.background='rgba(0,0,0,0.2)'">
                                    <div style="background: ${t.type === 'info' ? 'rgba(255,255,255,0.15)' : 'var(--accent-red)'}; color: white; font-weight: bold; font-size: 0.8rem; padding: 4px 8px; border-radius: 4px; height: fit-content;">${t.time}</div>
                                    <div>
                                        <div style="color: white; font-size: 0.9rem; margin-bottom: 4px;">${t.note}</div>
                                        <div style="font-size: 0.75rem; color: ${t.type === 'positive' ? 'var(--success)' : (t.type === 'negative' ? 'var(--danger)' : 'var(--text-secondary)')}; font-weight: bold; text-transform: uppercase;">
                                            <i class="fa-solid ${t.type === 'positive' ? 'fa-arrow-trend-up' : (t.type === 'negative' ? 'fa-triangle-exclamation' : 'fa-circle-info')}"></i> ${t.type}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
};

const addVodTranslations = {
    en: {
        add_vod_title: 'Import New VOD',
        auto_sync_title: 'YouTube Auto-Sync Active',
        auto_sync_desc: 'Connect your YouTube or Twitch channel to automatically import unlisted scrims when they are uploaded. This saves time and ensures the team has immediate access.',
        label_video_url: 'Video URL (YouTube/Twitch)',
        label_opponent: 'Opponent',
        label_map: 'Map',
        btn_cancel: 'Cancel',
        btn_import: 'Import & Analyze',
        alert_import: 'Simulated VOD Import! In production, this would sync with YouTube API.',
        team_label: 'OUR TEAM:',
        enemy_label: 'ENEMY:'
    },
    jp: {
        add_vod_title: '新しいVODをインポート',
        auto_sync_title: 'YouTube自動同期がアクティブ',
        auto_sync_desc: 'YouTubeまたはTwitchチャンネルを接続して、非公開のスクリムがアップロードされたときに自動的にインポートします。これにより時間を節約し、チームがすぐにアクセスできるようになります。',
        label_video_url: 'ビデオURL（YouTube/Twitch）',
        label_opponent: '対戦相手',
        label_map: 'マップ',
        btn_cancel: 'キャンセル',
        btn_import: 'インポートして分析',
        alert_import: 'シミュレートされたVODインポート！本番環境ではYouTube APIと同期します。',
        team_label: '味方チーム:',
        enemy_label: '敵チーム:'
    },
    zh: {
        add_vod_title: '导入新VOD',
        auto_sync_title: 'YouTube自动同步已激活',
        auto_sync_desc: '连接您的YouTube或Twitch频道，以便在上传未公开的训练赛时自动导入。这可节省时间并确保团队能立即访问。',
        label_video_url: '视频URL（YouTube/Twitch）',
        label_opponent: '对手',
        label_map: '地图',
        btn_cancel: '取消',
        btn_import: '导入并分析',
        alert_import: '模拟VOD导入！在生产环境中，这将与YouTube API同步。',
        team_label: '我方队伍:',
        enemy_label: '敌方队伍:'
    },
    ko: {
        add_vod_title: '새 VOD 가져오기',
        auto_sync_title: 'YouTube 자동 동기화 활성화됨',
        auto_sync_desc: 'YouTube 또는 Twitch 채널을 연결하여 미등록 스크림이 업로드될 때 자동으로 가져옵니다. 이를 통해 시간을 절약하고 팀이 즉시 액세스할 수 있습니다.',
        label_video_url: '비디오 URL(YouTube/Twitch)',
        label_opponent: '상대',
        label_map: '맵',
        btn_cancel: '취소',
        btn_import: '가져오기 및 분석',
        alert_import: '시뮬레이션된 VOD 가져오기! 프로덕션에서는 YouTube API와 동기화됩니다.',
        team_label: '우리 팀:',
        enemy_label: '적 팀:'
    }
};

if(typeof appTranslations !== 'undefined') {
    Object.keys(addVodTranslations).forEach(lang => {
        if(appTranslations[lang]) {
            Object.assign(appTranslations[lang], addVodTranslations[lang]);
        }
    });
}

window.openAddVodModal = function() {
    const modalHTML = `
        <div id="add-vod-modal" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0,0,0,0.85); z-index: 3000; display: flex; justify-content: center; align-items: center; backdrop-filter: blur(8px);">
            <div style="background: var(--bg-card); width: 90%; max-width: 600px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5); display: flex; flex-direction: column;">
                
                <div style="padding: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.2);">
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <i class="fa-brands fa-youtube" style="color: var(--accent-red); font-size: 1.8rem;"></i>
                        <h3 style="color: white; margin: 0; font-size: 1.2rem;">${t('add_vod_title', 'Import New VOD')}</h3>
                    </div>
                    <i class="fa-solid fa-xmark" style="color: var(--text-secondary); font-size: 1.5rem; cursor: pointer; transition: 0.2s;" onclick="document.getElementById('add-vod-modal').remove()" onmouseover="this.style.color='white'" onmouseout="this.style.color='var(--text-secondary)'"></i>
                </div>
                
                <div style="padding: 2rem;">
                    <div style="background: rgba(59, 130, 246, 0.1); border-left: 3px solid #3b82f6; padding: 1rem; border-radius: 4px; margin-bottom: 1.5rem; display: flex; gap: 15px; align-items: flex-start;">
                        <i class="fa-solid fa-robot" style="color: #60a5fa; font-size: 1.5rem; margin-top: 3px;"></i>
                        <div>
                            <strong style="color: white; display: block; margin-bottom: 4px; font-size: 0.95rem;">${t('auto_sync_title', 'YouTube Auto-Sync Active')}</strong>
                            <span style="color: var(--text-secondary); font-size: 0.85rem; line-height: 1.4; display: block;">${t('auto_sync_desc', 'Connect your YouTube or Twitch channel to automatically import unlisted scrims when they are uploaded. This saves time and ensures the team has immediate access.')}</span>
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                        <div>
                            <label style="color: var(--text-secondary); font-size: 0.85rem; font-weight: bold; margin-bottom: 6px; display: block;">${t('label_video_url', 'Video URL (YouTube/Twitch)')}</label>
                            <input type="text" placeholder="https://youtube.com/watch?v=..." style="width: 100%; padding: 10px 12px; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; color: white; outline: none; font-family: 'Inter', sans-serif;">
                        </div>
                        
                        <div style="display: flex; gap: 15px;">
                            <div style="flex: 1;">
                                <label style="color: var(--text-secondary); font-size: 0.85rem; font-weight: bold; margin-bottom: 6px; display: block;">${t('label_opponent', 'Opponent')}</label>
                                <input type="text" placeholder="e.g. Sentinels" style="width: 100%; padding: 10px 12px; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; color: white; outline: none; font-family: 'Inter', sans-serif;">
                            </div>
                            <div style="flex: 1;">
                                <label style="color: var(--text-secondary); font-size: 0.85rem; font-weight: bold; margin-bottom: 6px; display: block;">${t('label_map', 'Map')}</label>
                                <select style="width: 100%; padding: 10px 12px; background: var(--bg-secondary); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; color: white; outline: none; font-family: 'Inter', sans-serif; cursor: pointer;">
                                    <option>Ascent</option><option>Bind</option><option>Haven</option><option>Lotus</option><option>Sunset</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="padding: 1.5rem; border-top: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: flex-end; gap: 10px; background: rgba(0,0,0,0.1);">
                    <button onclick="document.getElementById('add-vod-modal').remove()" style="background: transparent; color: white; border: 1px solid rgba(255,255,255,0.2); padding: 8px 15px; border-radius: 4px; cursor: pointer; transition: 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">${t('btn_cancel', 'Cancel')}</button>
                    <button onclick="alert('${t('alert_import', 'Simulated VOD Import! In production, this would sync with YouTube API.')}'); document.getElementById('add-vod-modal').remove();" style="background: var(--accent-red); color: white; border: none; padding: 8px 20px; border-radius: 4px; cursor: pointer; font-weight: bold; transition: 0.2s;" onmouseover="this.style.filter='brightness(1.2)'" onmouseout="this.style.filter='brightness(1)'">${t('btn_import', 'Import & Analyze')}</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
};
