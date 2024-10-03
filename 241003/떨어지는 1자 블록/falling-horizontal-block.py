n, m, k = map(int, input().split())
k -= 1 # 인덱스화
arr = [list(map(int, input().split())) for _ in range(n)]


# block : for j in range(k, k+m) i가 n-1 -1 -1 로 돌면서 True? 빢! break

# 전부 비었니?
def all_blank(row, col_s, col_e):
    for col in range(col_s, col_e):
        if arr[row][col] != 0:
            return False
    return True

def get_target_row():
    for row in range(n - 1):
        # 안빈놈이 나왔니?
        if not all_blank(row + 1, k, k+m):
            return row
    
    # 끝까지 안빈놈 없니?
    return n - 1

target_row = get_target_row()

for col in range(k, k + m):
    arr[target_row][col] = 1

for elem in arr:
    print(*elem)