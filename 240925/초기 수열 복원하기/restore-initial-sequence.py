def reconstruct_sequence(N, sums):
    from itertools import combinations

    # 가능한 (A1, A2) 쌍을 찾습니다.
    possible_pairs = []
    S1 = sums[0]
    for A1 in range(1, N + 1):
        A2 = S1 - A1
        if 1 <= A2 <= N and A1 != A2:
            possible_pairs.append((A1, A2))

    # 사전순으로 정렬하여 먼저 발견되는 유효한 수열을 반환합니다.
    for pair in sorted(possible_pairs):
        A = list(pair)
        used = set(A)
        valid = True

        for i in range(1, N - 1):
            next_val = sums[i] - A[-1]
            if not (1 <= next_val <= N) or next_val in used:
                valid = False
                break
            A.append(next_val)
            used.add(next_val)

        if valid:
            return A

    # 문제의 조건상 항상 가능한 답이 존재한다고 가정하므로, 여기 도달하지 않습니다.
    return []

# 입력 받기
import sys

def main():
    import sys

    input = sys.stdin.read
    data = input().split()
    N = int(data[0])
    sums = list(map(int, data[1:N]))

    sequence = reconstruct_sequence(N, sums)
    print(' '.join(map(str, sequence)))

if __name__ == "__main__":
    main()