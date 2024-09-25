n, m, p = map(int, input().split())
msgs = [input().split() for _ in range(m)]

# Set of people who definitely read message p
readers = set()
readers.add(msgs[p - 1][0])  # The sender of message p

# Add all senders after message p
for i in range(p, m):
    readers.add(msgs[i][0])

# All people in the chat
all_people = set(chr(65 + i) for i in range(n))

# People who might not have read message p
potential_unreaders = all_people - readers

# Output the names sorted lexicographically
print(' '.join(sorted(potential_unreaders)))