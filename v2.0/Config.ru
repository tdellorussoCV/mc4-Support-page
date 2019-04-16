use Rack::Static,
  :urls => ["/mc4","/images", "/js", "/json", "/css", "/templates"],
  :root => "src"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('src/mc4/index.html', File::RDONLY)
  ]
}