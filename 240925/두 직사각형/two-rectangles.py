sq1 = map(int, input().split())
sq2 = map(int, input().split())

def find_ans(sq1, sq2):
    x1, y1, x2, y2 = sq1
    a1, b1, a2, b2 = sq2
    if x1 > a2 or a1 > x2 or y1 > b2 or b1 > y2:
        return True

if find_ans(sq1, sq2):
    print('nonoverlapping')
else:
    print('overlapping')