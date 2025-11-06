export const FormulaExplanation = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gold">🎬 Scoring Methodology</h2>
        <p className="text-muted-foreground leading-relaxed">
          Each film receives a score from 0-100 for each voter segment based on weighted factors. 
          The final prediction uses the Academy's preferential ballot system where voters rank their choices.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gold">👥 Voter Segments</h2>
        
        <div className="space-y-3">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-bold text-foreground text-lg mb-2">Hollywood Traditionalist (30-35% of votes)</h3>
            <p className="text-muted-foreground">
              Age 62-78, predominantly male & white, favors traditional dramas, star power, and studio backing
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-bold text-foreground text-lg mb-2">Industry Craftsperson (25-30% of votes)</h3>
            <p className="text-muted-foreground">
              Age 45-60, technical branches, values cinematography, editing, sound, and production design excellence
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-bold text-foreground text-lg mb-2">Progressive Cinephile (20-25% of votes)</h3>
            <p className="text-muted-foreground">
              Age 35-50, diverse, champions representation, artistic originality, and international cinema
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-bold text-foreground text-lg mb-2">Business-Minded Pragmatist (15-20% of votes)</h3>
            <p className="text-muted-foreground">
              Age 40-58, producers/executives, considers box office, cultural impact, and ROI
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gold">📊 Scoring Factors (Per Segment)</h2>
        
        <div className="space-y-3">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-bold text-foreground text-lg mb-3">Universal Factors (Apply to All)</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Guild Support (0-25 pts): PGA, DGA, SAG, WGA noms/wins</li>
              <li>• Festival Performance (0-15 pts): Major festival awards</li>
              <li>• Critical Reception (0-10 pts): Metacritic/RT scores</li>
              <li>• Technical Achievement (0-10 pts): Craft excellence</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="font-bold text-foreground text-lg mb-3">Segment-Specific (0-40 pts)</h3>
            <div className="space-y-3 text-muted-foreground">
              <p><strong className="text-foreground">Traditionalist:</strong> Star Power, Genre Type, Studio Backing, Director Pedigree, Campaign</p>
              <p><strong className="text-foreground">Craftsperson:</strong> Technical Guilds, Cinematography, Design, Editing, Sound</p>
              <p><strong className="text-foreground">Cinephile:</strong> Representation, Originality, Social Relevance, Festival Prestige, Critics</p>
              <p><strong className="text-foreground">Pragmatist:</strong> Box Office, Cultural Impact, Momentum, Producer Package, ROI</p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gold">🗳️ Preferential Ballot System</h2>
        <div className="bg-card border border-border rounded-lg p-5">
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Academy uses ranked-choice voting. Films need &gt;50% to win. Rankings are weighted:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li>• 1st place: 10 points</li>
            <li>• 2nd place: 7 points</li>
            <li>• 3rd place: 5 points</li>
            <li>• 4th place: 3 points</li>
            <li>• 5th place: 2 points</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed mt-4">
            This system rewards <strong className="text-gold">consensus picks</strong> that are broadly liked over divisive favorites.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold text-gold">🎯 Key Insight</h2>
        <div className="bg-card border border-gold/30 rounded-lg p-5">
          <p className="text-muted-foreground leading-relaxed">
            Winners typically need strong support from at least 2 segments and cannot be actively opposed by 
            Traditionalists (the largest bloc). The Producers Guild Award is the strongest predictor, 
            matching Oscar winners 13 of the past 16 years.
          </p>
        </div>
      </section>
    </div>
  );
};