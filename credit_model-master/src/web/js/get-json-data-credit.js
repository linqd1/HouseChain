    var jcontext = {
    "House_name": "DTZ CHAIN",
    "u_id": "43535897840559435432",
    "describe": "<a> DTZ CHAIN </a> is a end-to-end solution combining autonomous driving with built-in computer vision, artificial intelligence and data analytics software for House sales.",
    "management_forms": "retained",
    "uniform_social_credit_code": "91440300678591043R",
    "identification_number_of_the_taxpayer": "91440300678591043R",
    "registered_number": "440301103575538",
    "organization_code": "67859104-3",
    "insured_number": "516",
    "address": "Hangzhou Xiaoshan Xinming Road, 223",
    "establish_time": "2013",
    "registered_capital": "300m yuan",
    "registered_site": "hangzhou",
    "main_business": "Internet product",
    "staffs_num": "36",
    "first_level_index": {
        "team_background_A1": {
            "educational_level_A11": {
                "year_2015": "B",
                "year_2016": "BB",
                "year_2017": "A"
            },
            "Career_Portfolio_A12": {
                "year_2015": "A",
                "year_2016": "AA",
                "year_2017": "AA"
            }
        },
        "profitability_A2": {
            "RoA_A21": {
                "year_2015": "-13%",
                "year_2016": "-23%",
                "year_2017": "-30%"
             },
            "RoI_A22": {
                "year_2015": "-9%",
                "year_2016": "-12%",
                "year_2017": "-11%"
            }
        },
        "operation_capacity_A3": {
            "accounts_receivable_turnover_rate_A31":{
                "year_2015": "106%",
                "year_2016": "130%",
                "year_2017": "135%"
            },
            "total_capital_A32":{
                "year_2015": "10%",
                "year_2016": "16%",
                "year_2017": "26%"
            }
        },
        "growth_ability_A4": {
            "MBRG_A41":{
                "year_2015": "3.51%",
                "year_2016": "3.68%",
                "year_2017": "5.39%"
            },
            "total_assets_growth_rate_A42":{
                "year_2015": "-3.70%",
                "year_2016": "-5.10%",
                "year_2017": "-6.30%"
            }
        },
        "RD_level_A5": {
            "production_iteration_speed_A51":{
                "year_2015": "B",
                "year_2016": "BB",
                "year_2017": "A"
            }
        }
    }
}

document.getElementById('describe').innerHTML = jcontext.describe;
document.getElementById('House_name').innerHTML = jcontext.House_name;
document.getElementById('educational_level_A11').innerHTML = jcontext.first_level_index.team_background_A1.educational_level_A11.year_2017;
document.getElementById('Career_Portfolio_A12').innerHTML = jcontext.first_level_index.team_background_A1.Career_Portfolio_A12.year_2017;
document.getElementById('RoA_A21').innerHTML = jcontext.first_level_index.profitability_A2.RoA_A21.year_2017;
document.getElementById('RoI_A22').innerHTML = jcontext.first_level_index.profitability_A2.RoI_A22.year_2017;
document.getElementById('accounts_receivable_turnover_rate_A31').innerHTML = jcontext.first_level_index.operation_capacity_A3.accounts_receivable_turnover_rate_A31.year_2017;
document.getElementById('total_capital_A32').innerHTML = jcontext.first_level_index.operation_capacity_A3.total_capital_A32.year_2017;
document.getElementById('MBRG_A41').innerHTML = jcontext.first_level_index.growth_ability_A4.MBRG_A41.year_2017;
document.getElementById('total_assets_growth_rate_A42').innerHTML = jcontext.first_level_index.growth_ability_A4.total_assets_growth_rate_A42.year_2017;



//var jcontext = JSON.parse(json_obj);

