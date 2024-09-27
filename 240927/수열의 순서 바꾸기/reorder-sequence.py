n = int(input())
arr = list(map(int, input().split()))
new_arr = []

temp_arr = []

# 연속된 숫자를 블록으로 그룹화
for i in range(n-1):
    temp_arr.append(arr[i])
    if arr[i] != arr[i+1] - 1:
        new_arr.append(temp_arr)
        temp_arr = []
temp_arr.append(arr[n-1])  # 마지막 요소 처리
new_arr.append(temp_arr)

# print("초기 블록:", new_arr)

ans = 0

while True:
    moved = False
    # 첫 번째 블록을 꺼냄
    first_block = new_arr.pop(0)

    # 어디에 삽입할지 적절한 위치를 찾음
    inserted = False
    for i in range(len(new_arr)):
        # 만약 현재 블록의 첫 번째 값이 첫 번째 블록의 마지막 값보다 크다면
        if new_arr[i][0] > first_block[-1]:
            new_arr.insert(i+1, first_block)  # 적절한 위치에 삽입
            ans += len(first_block)
            inserted = True
            moved = True
            # print("블록 이동:", new_arr)
            break
        else:
            break

    # 만약 적절한 위치를 찾지 못했다면 맨 뒤에 추가
    if not inserted:
        new_arr.append(first_block)
        ans += len(first_block)
        moved = True
        # print("블록 이동 (맨 뒤로):", new_arr)
        break

    # 더 이상 이동할 필요가 없으면 종료
    if not moved:
        break

# print("최종 정렬:", new_arr)
# print("이동 횟수:", ans)

print(ans)