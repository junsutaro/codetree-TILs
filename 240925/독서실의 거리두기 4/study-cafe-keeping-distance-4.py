import itertools

def find_min_distance(occupied_positions):
    """자리잡은 사람들의 위치 리스트에서 최소 거리를 계산하는 함수"""
    if len(occupied_positions) < 2:
        return float('inf')  # 사람이 한 명 이하인 경우
    min_dist = float('inf')
    for i in range(len(occupied_positions) - 1):
        dist = occupied_positions[i + 1] - occupied_positions[i]
        if dist < min_dist:
            min_dist = dist
    return min_dist

# 입력 받기
n = int(input())
seating_str = input().strip()

# 현재 자리잡은 사람들과 빈 자리의 인덱스 리스트 생성
occupied = [i for i, seat in enumerate(seating_str) if seat == '1']
zeros = [i for i, seat in enumerate(seating_str) if seat == '0']

max_min_distance = 0

# 모든 빈 자리의 두 조합을 순회
for p1, p2 in itertools.combinations(zeros, 2):
    # 새로운 두 사람을 추가한 자리 리스트 생성
    new_occupied = sorted(occupied + [p1, p2])
    
    # 새로운 자리 리스트에서 최소 거리 계산
    current_min_dist = find_min_distance(new_occupied)
    
    # 최대 최소 거리 갱신
    if current_min_dist > max_min_distance:
        max_min_distance = current_min_dist

print(max_min_distance)