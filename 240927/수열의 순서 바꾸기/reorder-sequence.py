def min_moves_to_sort(N, seq):
    sorted_seq = sorted(seq)  # 정렬된 수열
    count = 0  # 이동 횟수

    # 현재 수열이 정렬될 때까지 반복
    while seq != sorted_seq:
        # 맨 앞의 원소를 뒤로 보내는 작업
        seq.append(seq.pop(0))
        count += 1  # 이동 횟수 증가

    return count

# 입력
N = int(input())
seq = list(map(int, input().split()))

# 결과 출력
print(min_moves_to_sort(N, seq))