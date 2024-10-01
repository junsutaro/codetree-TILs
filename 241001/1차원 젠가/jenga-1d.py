n = int(input())
blocks = []
for _ in range(n):
    blocks.append(int(input()))

s1, e1 = map(int, input().split())
s2, e2 = map(int, input().split())

for _ in range(s1-1, e1):
    blocks.pop(s1-1)
for _ in range(s2-1, e2):
    blocks.pop(s2-1)

print(len(blocks))
for elem in blocks:
    print(elem)