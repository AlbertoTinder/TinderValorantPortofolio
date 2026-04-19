import re

html_path = r'e:\HTML\imagenes\portfolio\analytics_preview.html'
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('GENERATE RADAR ANALYTICS', 'GENERATE SPIDER ANALYTICS')

table_start = content.find('<!-- Table -->')
tactical_cards_start = content.find('<!-- Tactical Map Cards -->')
split_content = content[table_start:tactical_cards_start]

# Add emojis
split_content = split_content.replace('<div class="round-box win">R2 <i class="fas fa-bolt round-icon icon-ult"></i></div>', '<div class="round-box win">R2 <i class="fas fa-dollar-sign round-icon icon-fb"></i></div>')
split_content = split_content.replace('<div class="round-box loss">R5 <i class="fas fa-skull-crossbones round-icon icon-fd"></i></div>', '<div class="round-box loss">R5 <i class="fas fa-dollar-sign round-icon icon-fd"></i></div>')

legend_str = '''<div class="legend" style="flex-wrap: wrap;">
                <div class="legend-item"><i class="fas fa-bolt icon-ult"></i> Ultimate Used</div>
                <div class="legend-item"><i class="fas fa-biohazard icon-fb"></i> Entry FB (Green)</div>
                <div class="legend-item"><i class="fas fa-skull-crossbones icon-fd"></i> First Death (Red)</div>
                <div class="legend-item"><i class="fas fa-dollar-sign icon-fb"></i> Eco Won</div>
                <div class="legend-item"><i class="fas fa-dollar-sign icon-fd"></i> Anti-Eco Lost</div>
            </div>'''
split_content = re.sub(r'<div class="legend">.*?</div>\s*</div>', legend_str + '\n        </div>', split_content, flags=re.DOTALL)

haven_content = split_content.replace('TEAM STATISTICS: SPLIT', 'TEAM STATISTICS: HAVEN')
haven_content = haven_content.replace('+12', '-2').replace('+8', '-5').replace('+3', '-1').replace('+6', '+4').replace('<td>0</td>', '<td>-8</td>')

lotus_content = split_content.replace('TEAM STATISTICS: SPLIT', 'TEAM STATISTICS: LOTUS')

new_sections = f'''
<div id="data-split" class="map-data">{split_content}</div>
<div id="data-haven" class="map-data" style="display:none;">{haven_content}</div>
<div id="data-lotus" class="map-data" style="display:none;">{lotus_content}</div>
'''

content = content[:table_start] + new_sections + content[tactical_cards_start:]

content = content.replace("'Entry Success',", "'Pistol Win Rate',")
content = content.replace("'Retake Efficiency',", "'Retake Win Rate',")
content = content.replace("'Post-plant Hold',", "'Post-plant Win Rate',")
content = content.replace("'Utility Impact',", "'Anti-Eco Win Rate',")
content = content.replace("'Econ Management'", "'Eco Win Rate',\n                            'Full Buy Win Rate'")

content = content.replace("const teamAverage = [75, 65, 70, 80, 85];\n", "")

radar_data_new = '''const radarData = {
            'split': { label: 'Win Rates - SPLIT', data: [100, 85, 45, 90, 40, 75] },
            'haven': { label: 'Win Rates - HAVEN', data: [30, 90, 65, 40, 60, 45] },
            'lotus': { label: 'Win Rates - LOTUS', data: [50, 40, 100, 80, 20, 60] }
        };'''
content = re.sub(r'const radarData = \{[^}]+\};', radar_data_new, content)

content = re.sub(r'\}, \{\s*label: \'Team Average\'[^\}]+\]\n\s*\}', '', content)

content = re.sub(r'const avg = teamAverage\[context.dataIndex\];\s*return val >= avg \? \'#4CAF50\' : \'#F44336\';', r'return val >= 50 ? \'#4CAF50\' : \'#F44336\';', content)

js_selection = '''function selectMap(mapName, btnElement) {
            document.querySelectorAll('.map-tag').forEach(btn => btn.classList.remove('active'));
            btnElement.classList.add('active');
            
            document.querySelectorAll('.map-data').forEach(div => div.style.display = 'none');
            document.getElementById('data-' + mapName.toLowerCase()).style.display = 'block';
        }'''
content = re.sub(r'function selectMap[^}]+}', js_selection, content)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)
