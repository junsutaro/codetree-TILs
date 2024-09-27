n = int(input())
arr = list(map(int, input().split()))

# 홀수와 짝수의 개수 계산
odd_count = sum(1 for num in arr if num % 2 == 1)
even_count = n - odd_count

ans = 0  # 그룹의 수
parity = 0  # 현재 필요한 합의 패리티 (0: 짝수, 1: 홀수)

while True:
    if parity == 0:
        # 짝수 합을 만들어야 함
        if even_count > 0:
            even_count -= 1
            ans += 1
            parity = 1
        elif odd_count >= 2:
            odd_count -= 2
            ans += 1
            parity = 1
        else:
            break
    else:
        # 홀수 합을 만들어야 함
        if odd_count > 0:
            odd_count -= 1
            ans += 1
            parity = 0
        else:
            break

# 남은 숫자가 있다면 그룹 수를 조정하여 모든 숫자를 사용
remaining_numbers = odd_count + even_count
if remaining_numbers > 0:
    if ans > 0:
        ans -= 1  # 마지막 그룹에 남은 숫자를 포함
    else:
        ans = 1  # 모든 숫자를 한 그룹으로 묶음

print(ans)