n = int(input())
scores = [tuple(input().split()) for _ in range(n)]

# 각 학생의 초기 점수
sc_a, sc_b, sc_c = 0, 0, 0

# 초기 명예의 전당 조합
def get_hall_of_fame(sc_a, sc_b, sc_c):
    max_score = max(sc_a, sc_b, sc_c)
    fame = set()
    if sc_a == max_score:
        fame.add('A')
    if sc_b == max_score:
        fame.add('B')
    if sc_c == max_score:
        fame.add('C')
    return fame

# 명예의 전당의 초기 상태 (처음에는 A, B, C 모두 점수 0)
current_fame = get_hall_of_fame(sc_a, sc_b, sc_c)
ans = 0

# 점수 변동 처리
for name, score in scores:
    score = int(score)

    # 점수 갱신
    if name == 'A':
        sc_a += score
    elif name == 'B':
        sc_b += score
    else:
        sc_c += score

    # 새로운 명예의 전당 조합을 계산
    new_fame = get_hall_of_fame(sc_a, sc_b, sc_c)

    # 명예의 전당 조합이 변경되었으면 카운트 증가
    if new_fame != current_fame:
        ans += 1
        current_fame = new_fame

print(ans)