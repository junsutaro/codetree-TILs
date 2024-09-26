n = int(input())

scores = [tuple(input().split()) for _ in range(n)]

sc_a = 0
sc_b = 0 


def get_status(sc1, sc2):
    if sc1 > sc2:
        return 1
    elif sc2 > sc1:
        return 2
    else:
        return 3


ans = 0

for name, score in scores:
    score = int(score)

    if name == 'A':
        sc_a += score
        if get_status(sc_a - score, sc_b) != get_status(sc_a, sc_b):
            ans += 1
    
    else:
        sc_b += score
        if get_status(sc_a, sc_b - score) != get_status(sc_a, sc_b):
            ans += 1

print(ans)