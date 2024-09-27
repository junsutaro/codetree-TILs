def min_moves_to_sort(N, seq):
    max_sorted_len = 1  # 이미 정렬된 최대 길이
    for i in range(1, N):
        if seq[i] > seq[i - 1]:
            max_sorted_len += 1
        else:
            break

    # 이미 정렬된 부분은 그대로 두고, 나머지만 이동해야 함
    return N - max_sorted_len

# 입력
N = int(input())
seq = list(map(int, input().split()))

# 결과 출력
print(min_moves_to_sort(N, seq))