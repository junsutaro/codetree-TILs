n = int(input());
arr = [tuple(map(int, input().split())) for _ in range(n)]

ans = 0

# i j k는 각 자리의 숫자입니다~~~~~
for i in range(1, 10):
	for j in range(1, 10):
		for k in range(1, 10):
			if  i == j or i == k or j == k :
				continue
			flag = True

			for a, num_cnt1, num_cnt2 in arr:
				x = a // 100
				y = a // 10 % 10
				z = a % 10

				cnt1 = 0
				cnt2 = 0
				if ( i == x ) :
					cnt1 += 1
				if ( x == j or x == k ):
					cnt2 += 1
				if ( j == y ) :
					cnt1 += 1
				if ( y == i or y == k ):
					cnt2 += 1
				if ( k == z ) :
					cnt1 += 1
				if ( z == i or z == j ):
					cnt2 += 1

				if (cnt1 != num_cnt1 or cnt2 != num_cnt2):
					flag = False
					break
					
				
			if flag:
				ans += 1

print(ans)