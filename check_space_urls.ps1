$urls = @(
"https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1593696140829-c58b6df16949?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1505691938895-1758d7bab104?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1616137466211-f939a420be63?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1595524362625-f76db209e86a?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1560185007-cde436ca6a25?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=800&h=600&q=80",
"https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&h=600&q=80"
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
        Write-Host "Failed: $_"
    }
}
