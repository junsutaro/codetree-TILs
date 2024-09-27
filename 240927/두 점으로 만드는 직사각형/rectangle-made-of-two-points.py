x1, y1, x2, y2 = map(int, input().split())
a1, b1, a2, b2 = map(int, input().split())

minx = min(a1, x1)
miny = min(b1, y1)
maxx = max(a2, x2)
maxy = max(b2, y2)

print((maxx - minx) * (maxy - miny))