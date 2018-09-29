import sys
import json
with open(sys.argv[1]) as f:
    data = json.load(f)

w_init=[0.0440,0.1320,0.0177,0.0177,0.0155,0.0077,0.0497,0.0497,0.0315]
w_total=sum(w_init)
w=[x/w_total for x in w_init]



def score(x):
  if x=='AAA':
    return 100
  if x=='AA':
    return 85
  if x=='A':
    return 75
  if x=='BBB':
    return 65
  if x=='BB':
    return 50
  if x=='B':
    return 35
  if x=='CCC':
    return 25
  if x=='CC':
    return 15
  return (float(x.replace(r'%', r'0'))+100)/2
    
def get_score(year):
  ret=0
  ret=ret+score(data['first_level_index']['team_background_A1']['educational_level_A11'][year])*w[0]
  ret=ret+score(data['first_level_index']['team_background_A1']['Career_Portfolio_A12'][year])*w[1]
  ret=ret+score(data['first_level_index']['profitability_A2']['RoA_A21'][year])*w[2]
  ret=ret+score(data['first_level_index']['profitability_A2']['RoI_A22'][year])*w[3]
  ret=ret+score(data['first_level_index']['operation_capacity_A3']['accounts_receivable_turnover_rate_A31'][year])*w[4]
  ret=ret+score(data['first_level_index']['operation_capacity_A3']['total_capital_A32'][year])*w[5]
  ret=ret+score(data['first_level_index']['growth_ability_A4']['MBRG_A41'][year])*w[6]
  ret=ret+score(data['first_level_index']['growth_ability_A4']['total_assets_growth_rate_A42'][year])*w[7]
  ret=ret+score(data['first_level_index']['RD_level_A5']['production_iteration_speed_A51'][year])*w[8]
  return ret

weight_of_year=[0.2,0.3,0.5]

print get_score('year_2015')*weight_of_year[0]+get_score('year_2016')*weight_of_year[1]+get_score('year_2017')*weight_of_year[2]
