var config = {
    style: 'mapbox://styles/gangsardwisaputro/cmtpuip3100ex01pm6wzk6hzt',
    accessToken: 'pk.eyJ1IjoiZ2FuZ3NhcmR3aXNhcHV0cm8iLCJhIjoiY210amZqeHpwMDA2NDJ4b3VsanczZTN0NCJ9.0Rnb9qN7_uDb-3mzI4bjvA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'light',
    use3dTerrain: false,
    auto: false,
    title: 'Ageing in Place: Are Singapore\'s Seniors Well-Served?',
    subtitle: 'Mapping elderly concentration and access to daily amenities across Singapore',
    byline: 'By Gangsar Dwi Saputro',
    footer: 'Data sources: Singapore Department of Statistics (2025), NEA, MOH, LTA, via data.gov.sg. Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    legend: {
        'chapter-1': {
            title: 'Elderly Population (% of subzone)',
            position: 'left',
            items: [
                { color: '#ffe6cc', label: '0%' },
                { color: '#fdbb84', label: '5%' },
                { color: '#fc8d59', label: '10%' },
                { color: '#f54a1b', label: '15%' },
                { color: '#e02406', label: '20%' },
                { color: '#c00a00', label: '25%' },
                { color: '#9d0000', label: '30%' },
                { color: '#7a0000', label: '35%+' }
            ]
        },
        'chapter-2': {
            title: 'Amenities',
            position: 'right',
            items: [
                { color: '#f5d63d', label: 'Hawker Centre', dot: true },
                { color: '#0a47c2', label: 'MRT / LRT Station', dot: true },
                { color: '#339944', label: 'Clinic', dot: true },
                { color: '#0066cc', label: '400m Service Area' }
            ]
        },
        'chapter-3': {
            title: 'Service Gap',
            position: 'left',
            items: [
                { color: '#4c0f8a', label: 'Underserved area (>20% elderly, outside 400m reach)' },
                { color: '#0066cc', label: '400m Service Area' }
            ]
        },
        'chapter-4': {
            title: 'Bukit Panjang',
            position: 'right',
            items: [
                { color: '#4c0f8a', label: 'Underserved area' },
                { color: '#f5d63d', label: 'Hawker Centre', dot: true },
                { color: '#0a47c2', label: 'MRT / LRT Station', dot: true },
                { color: '#339944', label: 'Clinic', dot: true }
            ]
        },
        'chapter-5': {
            title: '',
            position: 'none',
            items: []
        }
    },
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'right',
            hidden: false,
            title: 'Where Singapore\'s elderly residents are',
            description: 'As of 2025, over 750,000 residents in Singapore are aged 65 and above, making up roughly 18% of the citizen population. This number has grown steadily over the past decade and is expected to continue rising. This map shows the share of elderly residents per subzone. The darker the colour, the higher the proportion of seniors in that area. Concentrations are highest in the central and inner residential areas, with notable pockets in the western and eastern parts of the island. Most of these are mature estates that have been around since the 1960s and 1970s, where residents who moved in decades ago have simply stayed and grown older.',
            location: {
                center: [103.9, 1.425],
                zoom: 10.0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'subzone-elderly-clean', opacity: 0.85 },
                { layer: 'MRT', opacity: 0 },
                { layer: 'Clinic', opacity: 0 },
                { layer: 'Hawker', opacity: 0 },
                { layer: 'Amenity', opacity: 0 },
                { layer: 'Gap', opacity: 0 }
            ],
            onChapterExit: [
                { layer: 'subzone-elderly-clean', opacity: 0.85 },
                { layer: 'MRT', opacity: 0 },
                { layer: 'Clinic', opacity: 0 },
                { layer: 'Hawker', opacity: 0 },
                { layer: 'Amenity', opacity: 0 },
                { layer: 'Gap', opacity: 0 }
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            title: 'Access to daily necessities',
            description: 'Three types of facilities matter most for elderly residents going about their daily lives: hawker centres for affordable food, MRT and LRT stations for getting around, and CHAS clinics for basic healthcare. The shaded areas show a 400-metre buffer around each facility. Research on elderly mobility in Singapore has shown that short travel distances are typical among seniors, and that neighbourhood-level accessibility directly affects how much they move around and whether they seek medical care (Koh, Leow, and Wong, 2015, <a href="https://doi.org/10.1016/j.scs.2014.11.001" target="_blank" style="color:#0071bc;">Sustainable Cities and Society</a>). These facilities are present across the island, but their coverage is not evenly distributed.',
            location: {
                center: [103.705, 1.35769],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'subzone-elderly-clean', opacity: 0.6 },
                { layer: 'MRT', opacity: 1 },
                { layer: 'Clinic', opacity: 1 },
                { layer: 'Hawker', opacity: 1 },
                { layer: 'Amenity', opacity: 0.6 },
                { layer: 'Gap', opacity: 0 }
            ],
            onChapterExit: [
                { layer: 'subzone-elderly-clean', opacity: 0.6 },
                { layer: 'MRT', opacity: 1 },
                { layer: 'Clinic', opacity: 1 },
                { layer: 'Hawker', opacity: 1 },
                { layer: 'Amenity', opacity: 0.6 },
                { layer: 'Gap', opacity: 0 }
            ]
        },
        {
            id: 'chapter-3',
            alignment: 'right',
            hidden: false,
            title: 'Where the coverage falls short',
            description: 'The purple areas show subzones where more than 20% of residents are aged 65 and above, but where no hawker centre, MRT or LRT station, or CHAS clinic sits within 400 metres. These are areas where elderly residents need to travel further than what is generally considered walkable just to access basic daily facilities. The gaps tend to appear in newer residential towns and at the outer edges of existing service areas, where infrastructure has not kept pace with the growing share of elderly residents.',
            location: {
                center: [103.900, 1.35769],
                zoom: 11.0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'subzone-elderly-clean', opacity: 0.0 },
                { layer: 'MRT', opacity: 0.0 },
                { layer: 'Clinic', opacity: 0.0 },
                { layer: 'Hawker', opacity: 0.0 },
                { layer: 'Amenity', opacity: 0.6 },
                { layer: 'Gap', opacity: 0.8 }
            ],
            onChapterExit: [
                { layer: 'subzone-elderly-clean', opacity: 0.0 },
                { layer: 'MRT', opacity: 0.0 },
                { layer: 'Clinic', opacity: 0.0 },
                { layer: 'Hawker', opacity: 0.0 },
                { layer: 'Amenity', opacity: 0.6 },
                { layer: 'Gap', opacity: 0.8 }
            ]
        },
        {
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            title: 'Bukit Panjang',
            description: 'Bukit Panjang is a largely HDB residential town in the northwest of Singapore with around 135,780 residents. Of those, 22,470 are aged 65 and above, which is 16.5% of the population. The town has its own LRT line with 10 stations and connects to 2 MRT stations, but it only has 2 hawker centres. In subzones like Bangkit, where 21.5% of residents are elderly, and Jelebu, where the figure is 19.2%, large portions of the neighbourhood fall outside the 400-metre reach of any hawker centre, MRT station, or clinic. For residents who depend on walking to get around, this gap is a practical constraint on their daily lives.',
            location: {
                center: [103.74500, 1.37800],
                zoom: 13.5,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'subzone-elderly-clean', opacity: 0.0 },
                { layer: 'MRT', opacity: 1 },
                { layer: 'Clinic', opacity: 1 },
                { layer: 'Hawker', opacity: 1 },
                { layer: 'Amenity', opacity: 0.3 },
                { layer: 'Gap', opacity: 0.7 }
            ],
            onChapterExit: [
                { layer: 'subzone-elderly-clean', opacity: 0.0 },
                { layer: 'MRT', opacity: 1 },
                { layer: 'Clinic', opacity: 1 },
                { layer: 'Hawker', opacity: 1 },
                { layer: 'Amenity', opacity: 0.3 },
                { layer: 'Gap', opacity: 0.7 }
            ]
        },
        {
            id: 'chapter-5',
            alignment: 'full',
            hidden: false,
            title: 'On the ground in Bukit Panjang',
            description: '<p style="margin-bottom:16px;">Bukit Panjang has over 22,000 elderly residents, many of whom have lived in the same block for decades. For those with limited mobility, getting to the nearest hawker centre or clinic is not a small thing. The views below show the actual streets and spaces these residents move through every day.</p><div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;"><div><iframe src="https://www.google.com/maps/embed?pb=!4v1788784779737!6m8!1m7!1sghe-G9oaXn4AAARFhcU-Og!2m2!1d1.377715267443111!2d103.7725275706583!3f245.93!4f-2.0600000000000023!5f0.7820865974627469" width="100%" height="220" style="border:0; border-radius:4px;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe><p style="font-size:11px; color:#666; margin-top:4px;">Bukit Panjang Hawker Centre, one of only two in the entire town</p></div><div><iframe src="https://www.google.com/maps/embed?pb=!4v1788784761666!6m8!1m7!1s2BQetbE4PzczptUZ1lIulg!2m2!1d1.372736953936064!2d103.7754981858533!3f303.69!4f2.819999999999993!5f0.7820865974627469" width="100%" height="220" style="border:0; border-radius:4px;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe><p style="font-size:11px; color:#666; margin-top:4px;">HDB blocks along Petir Road, where many elderly residents live</p></div><div><iframe src="https://www.google.com/maps/embed?pb=!4v1788784736914!6m8!1m7!1sdi24P_jcEoOEjNWG8EY45g!2m2!1d1.376478786705235!2d103.7713115462108!3f169.72!4f1.3700000000000045!5f0.6097269737708162" width="100%" height="220" style="border:0; border-radius:4px;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe><p style="font-size:11px; color:#666; margin-top:4px;">Petir LRT Station, part of the LRT network that serves the town</p></div><div><iframe src="https://www.google.com/maps/embed?pb=!4v1788784710216!6m8!1m7!1sGPdMLN7VCCK2LH57k_tIZw!2m2!1d1.37205555236364!2d103.7745052916033!3f26.41!4f-1.3900000000000006!5f0.7820865974627469" width="100%" height="220" style="border:0; border-radius:4px;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe><p style="font-size:11px; color:#666; margin-top:4px;">A covered walkway in the estate, typical of routes elderly residents take on foot</p></div></div><div style="margin-bottom:16px;"><iframe src="https://www.google.com/maps/embed?pb=!4v1788784670767!6m8!1m7!1sCAoSF0NJSE0wb2dLRUlDQWdJQ093N3lEaHdF!2m2!1d1.377690172098268!2d103.7733729767143!3f334.66!4f2.530000000000001!5f0.7820865974627469" width="100%" height="220" style="border:0; border-radius:4px;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe><p style="font-size:11px; color:#666; margin-top:4px;">Bangkit Wet Market, one of the few accessible food options for residents nearby</p></div><p style="margin-top:4px;">In July 2026, the Ministry of Health named Bukit Panjang as one of three new <a href="https://www.moh.gov.sg/newsroom/three-more-age-well-neighbourhoods-to-strengthen-support-for-seniors-in-the-community/" target="_blank" style="color:#0071bc;">Age Well Neighbourhoods</a>, a programme that will bring additional care services and senior-friendly infrastructure to areas with higher concentrations of elderly residents. Full rollout is expected by 2027. A <a href="https://www.mdpi.com/1660-4601/15/9/1988" target="_blank" style="color:#0071bc;">2018 study by NUS Geography researchers</a> also found that residential areas with limited access to CHAS clinics tend to become healthcare cold spots, where elderly residents are less likely to seek medical help because getting there is too difficult.</p>',
            location: {
                center: [103.75700, 1.3785],
                zoom: 14.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'subzone-elderly-clean', opacity: 0.0 },
                { layer: 'MRT', opacity: 0.4 },
                { layer: 'Clinic', opacity: 0.4 },
                { layer: 'Hawker', opacity: 0.4 },
                { layer: 'Amenity', opacity: 0.4 },
                { layer: 'Gap', opacity: 0.0 }
            ],
            onChapterExit: [
                { layer: 'subzone-elderly-clean', opacity: 0.0 },
                { layer: 'MRT', opacity: 0.4 },
                { layer: 'Clinic', opacity: 0.4 },
                { layer: 'Hawker', opacity: 0.4 },
                { layer: 'Amenity', opacity: 0.4 },
                { layer: 'Gap', opacity: 0.0 }
            ]
        }
    ]
};
