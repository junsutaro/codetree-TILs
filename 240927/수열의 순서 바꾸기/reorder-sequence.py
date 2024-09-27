def group_blocks(arr):
    blocks = []
    current_block = [arr[0]]  # 첫 번째 숫자로 시작하는 블록

    for i in range(1, len(arr)):
        if arr[i] == arr[i - 1] + 1:  # 연속된 숫자는 같은 블록에 추가
            current_block.append(arr[i])
        else:
            blocks.append(current_block)  # 새로운 블록 시작
            current_block = [arr[i]]

    blocks.append(current_block)  # 마지막 블록 추가
    return blocks

def move_blocks(arr, blocks):
    move_count = 0
    for block in blocks:
        move_count += len(block)
        # 여기서 블록을 실제로 이동시키는 작업이 필요합니다.
        # 정렬 여부를 확인합니다. 이 부분은 문제 요구 사항에 따라 구현할 수 있습니다.
        # 예시로 각 블록을 끝으로 보낸다고 가정합니다.
        for num in block:
            arr.remove(num)
        arr.extend(block)  # 블록을 뒤에 추가

    return move_count

n = int(input())
arr = list(map(int, input().split()))

blocks = group_blocks(arr)  # 블록으로 그룹화
move_count = move_blocks(arr, blocks)  # 블록을 이동시키며 카운트 계산

print(move_count - 1)