# Pig Dice

## Specifications

| Behavior: | Input Example: | Output Example: |
| - | - | - |
| **Our program should handle:** | **When it receives:** | **It should return:** |
| Generating a random number 1-6 when a user clicks "Rol"|click "Roll "  |1-6 |
| IF player rolls 2-6 then sum of rolls added to their current turn |2, 3 | 5 during turn |
|If player rolls 1 then no score is generated and other players turn |1|0 add to score & other players turn|
|If player "holds" then sum of players turn added to score | 2,3 | 5 added to score (sum of previous turns)|
|If player "holds" then other players turn in addition to previous specification |2,3| 5 + score + other player turn|
|Player to reach 100 or more first wins | 100| "You win!" |

