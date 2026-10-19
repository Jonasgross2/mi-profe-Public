// App-Symbol zeichnen (von build.py aufgerufen): swift icon.swift ZEICHEN HINTERGRUND ZEICHENFARBE PUNKTFARBE GRÖSSE ZIEL.png
// Farben als #rrggbb. Gleiches Muster für alle Kurse: großes Zeichen in Serifenschrift, Punkt oben rechts.
import AppKit

let a = CommandLine.arguments
func col(_ s: String) -> NSColor {
  let v = Int(s.dropFirst(), radix: 16) ?? 0
  return NSColor(srgbRed: CGFloat((v >> 16) & 255) / 255, green: CGFloat((v >> 8) & 255) / 255, blue: CGFloat(v & 255) / 255, alpha: 1)
}
let glyph = a[1], bg = col(a[2]), fg = col(a[3]), dot = col(a[4]), n = Int(a[5])!, out = a[6]
let s = CGFloat(n)
let rep = NSBitmapImageRep(bitmapDataPlanes: nil, pixelsWide: n, pixelsHigh: n, bitsPerSample: 8, samplesPerPixel: 4,
                           hasAlpha: true, isPlanar: false, colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0)!
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)
bg.setFill(); NSRect(x: 0, y: 0, width: s, height: s).fill()
let font = NSFont(name: "Georgia-Bold", size: s * 0.56) ?? NSFont.boldSystemFont(ofSize: s * 0.56)
let str = NSAttributedString(string: glyph, attributes: [.font: font, .foregroundColor: fg])
let b = str.boundingRect(with: NSSize(width: s, height: s), options: [.usesDeviceMetrics])
str.draw(at: NSPoint(x: (s - b.width) / 2 - b.minX, y: (s - b.height) / 2 - b.minY - s * 0.02))
dot.setFill(); NSBezierPath(ovalIn: NSRect(x: s * 0.70, y: s * 0.70, width: s * 0.13, height: s * 0.13)).fill()
NSGraphicsContext.restoreGraphicsState()
try! rep.representation(using: .png, properties: [:])!.write(to: URL(fileURLWithPath: out))
