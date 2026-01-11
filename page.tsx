"use client";

import { useState } from "react";
import {
  worldCycles,
  sorties,
  voidTrader,
  fissures,
  dailyDeals,
  newsItems,
  invasions,
  nightwave,
  getTierColor,
  getFactionColor,
} from "@/lib/mock-data";

// Header Component
function Header() {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold text-amber-400 tracking-wider">TIPSYCONTENT</h1>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Guides</a>
            <a href="#" className="text-sm text-primary hover:text-primary/80 transition-colors">Warframe</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Content</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Me</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

// Status Badge Component
function StatusBadge({ isActive, isComplete }: { isActive?: boolean; isComplete?: boolean }) {
  if (isComplete) {
    return (
      <span className="px-2 py-0.5 text-xs font-medium rounded bg-green-500/20 text-green-400 border border-green-500/30">
        Complete
      </span>
    );
  }
  if (isActive) {
    return (
      <span className="px-2 py-0.5 text-xs font-medium rounded bg-green-500/20 text-green-400 border border-green-500/30">
        Active
      </span>
    );
  }
  return null;
}

// World Cycles Section
function WorldCyclesSection() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span className="text-muted-foreground">&#9788;</span> Open World Cycles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {worldCycles.map((cycle) => (
          <div key={cycle.name} className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold">{cycle.name}</h3>
              <span
                className="px-2 py-0.5 text-xs font-medium rounded"
                style={{ backgroundColor: `${cycle.stateColor}20`, color: cycle.stateColor, border: `1px solid ${cycle.stateColor}40` }}
              >
                {cycle.state}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-1">
              Time until {cycle.state === "Night" ? "day" : cycle.state === "Cold" ? "warm" : "Fass"}
            </p>
            <p className="text-2xl font-mono font-semibold mb-3">{cycle.timeUntil}</p>
            <div className="w-full bg-secondary rounded-full h-1.5 mb-2">
              <div
                className="h-1.5 rounded-full transition-all"
                style={{ width: `${cycle.progress}%`, backgroundColor: cycle.stateColor }}
              />
            </div>
            <p className="text-xs text-muted-foreground">{cycle.cycleDuration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Sorties Section
function SortiesSection() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span className="text-muted-foreground">X</span> Sorties & Archon Hunts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sorties.map((sortie) => (
          <div key={sortie.name} className="bg-card rounded-lg border border-border p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">
                {sortie.name}: <span className="text-primary">{sortie.boss}</span>
              </h3>
              <StatusBadge isActive={sortie.isActive} />
            </div>
            <div className="space-y-2 text-sm mb-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Activation:</span>
                <span className="font-mono">{sortie.activation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Expires:</span>
                <span className="font-mono">{sortie.expires}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time Left:</span>
                <span className="font-mono text-amber-400">{sortie.timeLeft}</span>
              </div>
            </div>
            <div className="w-full bg-secondary rounded-full h-1 mb-4">
              <div className="h-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-500" style={{ width: "60%" }} />
            </div>
            <div className="space-y-3">
              {sortie.missions.map((mission) => (
                <div key={mission.name} className="bg-secondary/50 rounded p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium">{mission.name}: {mission.type}</span>
                    <span
                      className="px-2 py-0.5 text-xs font-medium rounded"
                      style={{ backgroundColor: `${mission.modifierColor}20`, color: mission.modifierColor }}
                    >
                      {mission.modifier}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Location: {mission.location}</p>
                  {mission.tileset && <p className="text-xs text-muted-foreground/70">{mission.tileset}</p>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Alerts Section
function AlertsSection() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span className="text-muted-foreground">!</span> Alerts
      </h2>
      <div className="bg-card rounded-lg border border-border p-6 text-center">
        <p className="text-muted-foreground">No active alerts right now.</p>
      </div>
    </section>
  );
}

// Void Trader Section
function VoidTraderSection() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span className="text-muted-foreground">&#9670;</span> Void Trader
      </h2>
      <div className="bg-card rounded-lg border border-border p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">{voidTrader.name}</h3>
          <StatusBadge isActive={voidTrader.isActive} />
        </div>
        <p className="text-sm mb-4">
          Location: <span className="text-cyan-400">{voidTrader.location}</span>
        </p>
        <div className="bg-secondary/50 rounded p-3 mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Arrival:</span>
            <span className="font-mono">{voidTrader.arrival}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Departure:</span>
            <span className="font-mono">{voidTrader.departure}</span>
          </div>
        </div>
        <div className="w-full bg-secondary rounded-full h-1 mb-2">
          <div className="h-1 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500" style={{ width: "70%" }} />
        </div>
        <div className="flex justify-between text-sm mb-4">
          <span className="text-muted-foreground">Time Left:</span>
          <span className="font-mono text-cyan-400">{voidTrader.timeLeft}</span>
        </div>
        <div className="border-t border-border pt-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium flex items-center gap-2">
              <span className="text-muted-foreground">&#9670;</span> Inventory
            </h4>
            <span className="text-sm text-muted-foreground">{voidTrader.inventory.length} items</span>
          </div>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {voidTrader.inventory.map((item) => (
              <div key={item.name} className="flex items-center justify-between bg-secondary/30 rounded p-2">
                <span className="text-sm">{item.name}</span>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <span className="text-amber-400">&#9679;</span> {item.ducats}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="text-slate-400">&#9679;</span> {item.credits.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-3 pt-3 border-t border-border text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><span className="text-amber-400">&#9679;</span> Orokin Ducats</span>
            <span className="flex items-center gap-1"><span className="text-slate-400">&#9679;</span> Credits</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Fissures Section
function FissuresSection() {
  const [selectedTier, setSelectedTier] = useState<string>("All");
  const tiers = ["All", "Lith", "Meso", "Neo", "Axi", "Requiem", "Omnia"];

  const filteredFissures = selectedTier === "All"
    ? fissures
    : fissures.filter((f) => f.tier === selectedTier);

  const tierCounts = tiers.reduce((acc, tier) => {
    acc[tier] = tier === "All" ? fissures.length : fissures.filter((f) => f.tier === tier).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span className="text-muted-foreground">&#9670;</span> Fissures
      </h2>
      <div className="flex flex-wrap gap-2 mb-4">
        {tiers.map((tier) => (
          <button
            key={tier}
            onClick={() => setSelectedTier(tier)}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-all ${
              selectedTier === tier
                ? "bg-secondary border-primary/50 text-foreground"
                : "border-border text-muted-foreground hover:border-primary/30"
            }`}
            style={tier !== "All" && selectedTier === tier ? { borderColor: getTierColor(tier) } : {}}
          >
            <span style={tier !== "All" ? { color: getTierColor(tier) } : {}}>{tier}</span>
            <span className="ml-1 text-muted-foreground">({tierCounts[tier]})</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {filteredFissures.map((fissure, idx) => (
          <div key={`${fissure.node}-${idx}`} className="bg-card rounded-lg border border-border p-3">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-sm">
                {fissure.node}
                <span className="text-muted-foreground"> ({fissure.planet})</span>
              </h4>
              <span
                className="px-1.5 py-0.5 text-xs font-medium rounded"
                style={{ backgroundColor: `${getTierColor(fissure.tier)}20`, color: getTierColor(fissure.tier) }}
              >
                {fissure.tier}
              </span>
            </div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Mission:</span>
                <span>{fissure.missionType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Expires:</span>
                <span className="font-mono">{fissure.expires}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time Left:</span>
                <span className={`font-mono ${fissure.isExpired ? "text-red-400" : "text-cyan-400"}`}>
                  {fissure.timeLeft}
                </span>
              </div>
            </div>
            <div className="w-full bg-secondary rounded-full h-1 mt-3">
              <div
                className="h-1 rounded-full"
                style={{
                  width: fissure.isExpired ? "100%" : "50%",
                  backgroundColor: getTierColor(fissure.tier),
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// Daily Deals Section
function DailyDealsSection() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span className="text-muted-foreground">&#9670;</span> Daily Deals
      </h2>
      {dailyDeals.map((deal) => (
        <div key={deal.name} className="bg-card rounded-lg border border-border p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="font-semibold text-lg">{deal.name}</h3>
              <p className="text-sm text-muted-foreground">Expires: {deal.expires}</p>
            </div>
            <span className="px-3 py-1 text-lg font-bold rounded bg-pink-500/20 text-pink-400 border border-pink-500/30">
              -{deal.discount}%
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4 my-4 bg-secondary/50 rounded p-3">
            <div>
              <p className="text-xs text-muted-foreground">Original</p>
              <p className="font-mono">{deal.originalPrice}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Sale</p>
              <p className="font-mono text-cyan-400">{deal.salePrice}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Save</p>
              <p className="font-mono text-green-400">-{deal.originalPrice - deal.salePrice}</p>
            </div>
          </div>
          <div className="mb-2">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted-foreground">Stock</span>
              <span>{deal.stock} / {deal.maxStock} left</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-cyan-500"
                style={{ width: `${(deal.stock / deal.maxStock) * 100}%` }}
              />
            </div>
          </div>
          <div className="w-full bg-secondary rounded-full h-1 mb-2">
            <div className="h-1 rounded-full bg-pink-500" style={{ width: "40%" }} />
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Time Left:</span>
            <span className="font-mono text-cyan-400">{deal.timeLeft}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

// News Section
function NewsSection() {
  const [filter, setFilter] = useState<"All" | "Community" | "News">("All");

  const filteredNews = filter === "All"
    ? newsItems
    : newsItems.filter((item) => item.category === filter);

  const counts = {
    All: newsItems.length,
    Community: newsItems.filter((i) => i.category === "Community").length,
    News: newsItems.filter((i) => i.category === "News").length,
  };

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span className="text-muted-foreground">&#9670;</span> News & Events
      </h2>
      <div className="flex gap-2 mb-4">
        {(["All", "Community", "News"] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-all ${
              filter === cat
                ? "bg-secondary border-primary/50 text-foreground"
                : "border-border text-muted-foreground hover:border-primary/30"
            }`}
          >
            {cat === "All" ? "" : cat === "Community" ? "&#127758; " : "&#128240; "}{cat} ({counts[cat]})
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {filteredNews.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className="flex items-center gap-4 bg-card rounded-lg border border-border p-3 hover:border-primary/30 transition-colors"
          >
            {item.imageUrl && (
              <img src={item.imageUrl} alt="" className="w-12 h-12 rounded object-cover" />
            )}
            <div className="flex-1">
              <h4 className="font-medium text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.date}</p>
            </div>
            <span className="text-muted-foreground">&rarr;</span>
          </a>
        ))}
      </div>
    </section>
  );
}

// Invasions Section
function InvasionsSection() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span className="text-muted-foreground">&#9670;</span> Invasions
      </h2>
      <div className="space-y-4">
        {invasions.map((invasion) => {
          const attackerPercent = (invasion.attackerProgress / invasion.totalProgress) * 100;

          return (
            <div key={`${invasion.node}-${invasion.planet}`} className="bg-card rounded-lg border border-border p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">
                  {invasion.node} <span className="text-muted-foreground">({invasion.planet})</span>
                </h3>
                <StatusBadge isActive={!invasion.isComplete} isComplete={invasion.isComplete} />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div
                  className="rounded p-3"
                  style={{
                    background: `linear-gradient(180deg, ${getFactionColor(invasion.attackerFaction)}30, ${getFactionColor(invasion.attackerFaction)}10)`,
                    borderLeft: `3px solid ${getFactionColor(invasion.attackerFaction)}`,
                  }}
                >
                  <p className="font-medium" style={{ color: getFactionColor(invasion.attackerFaction) }}>
                    {invasion.attackerFaction}
                  </p>
                  <p className="text-xs text-muted-foreground">Attacker</p>
                </div>
                <div
                  className="rounded p-3"
                  style={{
                    background: `linear-gradient(180deg, ${getFactionColor(invasion.defenderFaction)}30, ${getFactionColor(invasion.defenderFaction)}10)`,
                    borderLeft: `3px solid ${getFactionColor(invasion.defenderFaction)}`,
                  }}
                >
                  <p className="font-medium" style={{ color: getFactionColor(invasion.defenderFaction) }}>
                    {invasion.defenderFaction}
                  </p>
                  <p className="text-xs text-muted-foreground">Defender</p>
                </div>
              </div>
              <div className="flex justify-between items-center text-sm mb-1 text-center">
                <span className="text-muted-foreground w-full text-left">vs</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-mono">
                  {invasion.attackerProgress.toLocaleString()} / {invasion.totalProgress.toLocaleString()}
                </span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2 mb-4 overflow-hidden flex">
                <div
                  className="h-2 transition-all"
                  style={{
                    width: `${attackerPercent}%`,
                    backgroundColor: getFactionColor(invasion.attackerFaction),
                  }}
                />
                <div
                  className="h-2 transition-all"
                  style={{
                    width: `${100 - attackerPercent}%`,
                    backgroundColor: getFactionColor(invasion.defenderFaction),
                  }}
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs">Attacker Reward</p>
                  <p>{invasion.attackerReward}</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs">Defender Reward</p>
                  <p>{invasion.defenderReward}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Nightwave Section
function NightwaveSection() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <span className="text-muted-foreground">&#9670;</span> Nightwave
      </h2>
      <div className="bg-card rounded-lg border border-border p-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <span className="text-muted-foreground">&#9670;</span> {nightwave.name}
            </h3>
            <p className="text-sm text-muted-foreground">{nightwave.phase}</p>
          </div>
          <StatusBadge isActive={nightwave.isActive} />
        </div>
        <div className="bg-secondary/50 rounded p-3 mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-muted-foreground">Season Started:</span>
            <span className="font-mono">{nightwave.seasonStart}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Season Ends:</span>
            <span className="font-mono">{nightwave.seasonEnd}</span>
          </div>
        </div>
        <div className="bg-secondary/30 rounded p-3 mb-6 text-center">
          <span className="text-cyan-400">{nightwave.daysRemaining}</span>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium flex items-center gap-2">
              <span className="text-muted-foreground">&#9670;</span> Daily Challenges
            </h4>
            <span className="text-sm text-muted-foreground">{nightwave.dailyChallenges.length} active</span>
          </div>
          <div className="space-y-2">
            {nightwave.dailyChallenges.map((challenge) => (
              <div key={challenge.title} className="bg-secondary/30 rounded p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-medium text-sm">{challenge.title}</h5>
                    <p className="text-xs text-muted-foreground">{challenge.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">Expires: {challenge.expires}</p>
                  </div>
                  <span className="text-sm font-mono text-amber-400">{challenge.timeLeft}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium flex items-center gap-2">
              <span className="text-muted-foreground">&#9670;</span> Weekly Challenges
            </h4>
            <span className="text-sm text-muted-foreground">{nightwave.weeklyChallenges.length} active</span>
          </div>
          <div className="space-y-2">
            {nightwave.weeklyChallenges.map((challenge) => (
              <div key={challenge.title} className="bg-secondary/30 rounded p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-medium text-sm">{challenge.title}</h5>
                    <p className="text-xs text-muted-foreground">{challenge.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">Expires: {challenge.expires}</p>
                  </div>
                  <span className="text-sm font-mono text-amber-400">{challenge.timeLeft}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  const socialLinks = [
    { name: "Twitter", icon: "X", url: "#" },
    { name: "Instagram", icon: "IG", url: "#" },
    { name: "YouTube", icon: "YT", url: "#" },
    { name: "Discord", icon: "DC", url: "#" },
    { name: "Twitch", icon: "TW", url: "#" },
    { name: "Reddit", icon: "RD", url: "#" },
    { name: "Patreon", icon: "PT", url: "#" },
    { name: "GitHub", icon: "GH", url: "#" },
  ];

  return (
    <footer className="border-t border-border bg-card/50 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-amber-400 tracking-wider mb-4">TIPSYCONTENT</h2>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Guides</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground mb-4">The Tipsy Website a work in progress. Stay tuned for updates!</p>
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="w-8 h-8 flex items-center justify-center rounded bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors text-xs"
                title={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">&copy; TipsyContent</p>
        </div>
      </div>
    </footer>
  );
}

// Main Page
export default function WarframeDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Warframe Dashboard</h1>
          <p className="text-muted-foreground">Live data from the Origin System &mdash; updated every 60 seconds.</p>
        </div>

        <WorldCyclesSection />
        <SortiesSection />
        <AlertsSection />
        <VoidTraderSection />
        <FissuresSection />
        <DailyDealsSection />
        <NewsSection />
        <InvasionsSection />
        <NightwaveSection />
      </main>
      <Footer />
    </div>
  );
}
