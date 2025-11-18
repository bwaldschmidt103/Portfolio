document.getElementById("generate-excuses-btn").addEventListener("click", function() {
    const excuses = [
        "I work better under pressure!",
        "My creative genius takes time to bloom.",
        "The internet was down (for, like 5 minutes).",
        "I was researching... very important things.",
        "🕰️ I was optimizing my workflow... by watching cat videos.", 
        "📅 I thought today was a holiday. Turns out, it isn’t.",  
        "🥴 I was waiting for inspiration to strike… It never did.", 
        "☕ I needed coffee first. Then I needed a snack. Then… a nap.", 
        "📖 I was technically learning… by reading conspiracy theories.", 
        "💡 I'm letting the task marinate for maximum effectiveness.", 
        "🎨 I needed to make my workspace aesthetically pleasing first.",
        "🔄 I’ll do it after just one more scroll through social media!", 
        "🎯 The pressure of a tight deadline makes me perform better!",
        "🚶 I went to the gym first… to prove I can still be productive.", 
        "⌛ I was about to start, but then I remembered I had laundry.", 
        "💭 I’m doing it in my mind. Mental preparation is important!"
    ];
    document.getElementById("excuse-text").textContent = excuses[Math.floor(Math.random() * excuses.length)];
})