$urls = @(
"https://images.unsplash.com/photo-1616594039964-40891a909d99?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1560185007-cde436ca6a25?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1617325247661-675ab4b64ae4?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1522771753062-5885bbacd515?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1505693416388-b0346ef41439?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1615873966052-8dbd5ce322d2?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1505691938895-1758d7bab104?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=800&h=600&q=80"
)

foreach ($url in $urls) {
    try {
        $request = [System.Net.WebRequest]::Create($url)
        $request.Method = "HEAD"
        $request.Timeout = 5000
        $response = $request.GetResponse()
        Write-Host "OK"
        $response.Close()
    } catch {
        Write-Host "Failed"
    }
}
