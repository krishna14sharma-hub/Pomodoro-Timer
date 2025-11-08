// Define the footballTeam object
        const footballTeam = {
            team: "The Gemini Dragons FC",
            year: 2025,
            headCoach: "Coach Dynamo",
            players: [
                { name: "Kira Sol", position: "goalkeeper", isCaptain: false },
                { name: "Ryu Jin", position: "defender", isCaptain: true }, // Captain
                { name: "Mia Chen", position: "midfielder", isCaptain: false },
                { name: "Zane O'Connell", position: "forward", isCaptain: false },
                { name: "Leo Santos", position: "midfielder", isCaptain: false },
                { name: "Ava Sharma", position: "defender", isCaptain: false },
                { name: "Jaxon Vega", position: "forward", isCaptain: false }
            ]
        };

        /**
         * Renders the team metadata (coach, team name, year) into the respective elements.
         */
        const renderTeamMetadata = () => {
            document.getElementById('head-coach').textContent = footballTeam.headCoach;
            document.getElementById('team').textContent = footballTeam.team;
            document.getElementById('year').textContent = footballTeam.year;
        };

        /**
         * Renders player cards based on the selected position filter.
         * @param {string} positionFilter - The position to filter by, or "All Players".
         */
        const renderPlayerCards = (positionFilter) => {
            const container = document.getElementById('player-cards');
            container.innerHTML = ''; // Clear previous cards

            // Filter players based on the selection
            const filteredPlayers = footballTeam.players.filter(player => 
                positionFilter === 'All Players' || player.position === positionFilter
            );

            // Generate HTML for each player card
            filteredPlayers.forEach(player => {
                const captainSpan = player.isCaptain 
                    ? '<span class="captain">(Captain)</span>' 
                    : '';
                
                const cardDiv = document.createElement('div');
                cardDiv.classList.add('player-card');

                cardDiv.innerHTML = `
                    <h2>
                        ${player.name}
                        ${captainSpan}
                    </h2>
                    <p>Position: ${player.position}</p>
                `;

                container.appendChild(cardDiv);
            });
        };

        /**
         * Initializes the application: renders data and sets up event listeners.
         */
        const initializeApp = () => {
            renderTeamMetadata();

            // Initial render with 'All Players'
            renderPlayerCards('All Players');

            // Set up the filter event listener
            const filterDropdown = document.getElementById('position-filter');
            filterDropdown.addEventListener('change', (event) => {
                renderPlayerCards(event.target.value);
            });
        };

        // Run initialization when the window loads
        window.onload = initializeApp;