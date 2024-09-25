A, B, x, y = map(int, input().split())


ans = 0
# A -> B
distAB = abs(B - A)
# A -> x -> y -> B
distAxyB = abs(B - y) + abs(x - A)
# A -> y -> x -> B
distAyxB = abs(B-x) + abs(y-A)

ans = min(distAB, distAxyB, distAyxB)

print(ans)