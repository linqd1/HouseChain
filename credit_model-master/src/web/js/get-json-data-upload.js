    var jcontext = {
    "company_name": "Startup D",
    "u_id": "43535897840559433457",
    "describe": "Our company <a> Startup D </a> is a E-commerce company.",
    "management_forms": "retained",
    "uniform_social_credit_code": "91310300356591456R",
    "identification_number_of_the_taxpayer": "91310300356591567R",
    "registered_number": "44030110354568",
    "organization_code": "63245658-8",
    "insured_number": "677",
    "address": "Shanghai huaihai  Road, 578",
    "establish_time": "2016",
    "registered_capital": "1500m yuan",
    "registered_site": "shanghai",
    "main_business": "E-commerce service",
    "staffs_num": "64",
    "first_level_index": {
        "team_background_A1": {
            "educational_level_A11": {
                "year_2015": "B",
                "year_2016": "BB",
                "year_2017": "BBB"
            },
            "Career_Portfolio_A12": {
                "year_2015": "A",
                "year_2016": "AA",
                "year_2017": "AA"
            }
        },
        "profitability_A2": {
            "RoA_A21": {
                "year_2015": "-36%",
                "year_2016": "-26%",
                "year_2017": "-30%"
             },
            "RoI_A22": {
                "year_2015": "-16%",
                "year_2016": "-26%",
                "year_2017": "-37%"
            }
        },
        "operation_capacity_A31": {
            "accounts_receivable_turnover_rate_A31":{
                "year_2015": "18%",
                "year_2016": "15%",
                "year_2017": "15%"
            },
            "total_capital_A32":{
                "year_2015": "16%",
                "year_2016": "19%",
                "year_2017": "20%"
            }
        },
        "growth_ability_A4": {
            "MBRG_A41":{
                "year_2015": "7.57%",
                "year_2016": "13.68%",
                "year_2017": "15.58%"
            },
            "total_assets_growth_rate_A42":{
                "year_2015": "-13.80%",
                "year_2016": "-15.47%",
                "year_2017": " 16.58%"
            }
        },
        "RD_level_A5": {
            "production_iteration_speed_A51":{
                "year_2015": "A",
                "year_2016": "B",
                "year_2017": "BBB"
            }
        }
    }
}

document.getElementById('company_name_2').innerHTML = jcontext.company_name;
document.getElementById('uniform_social_credit_code').innerHTML = jcontext.uniform_social_credit_code;
document.getElementById('management_forms').innerHTML = jcontext.management_forms;
document.getElementById('uniform_social_credit_code').innerHTML = jcontext.uniform_social_credit_code;
document.getElementById('identification_number_of_the_taxpayer').innerHTML = jcontext.identification_number_of_the_taxpayer;
document.getElementById('registered_number').innerHTML = jcontext.registered_number;
document.getElementById('registered_site').innerHTML = jcontext.registered_site;
document.getElementById('organization_code').innerHTML = jcontext.organization_code;
document.getElementById('insured_number').innerHTML = jcontext.insured_number;
document.getElementById('establish_time').innerHTML = jcontext.establish_time;
document.getElementById('registered_capital').innerHTML = jcontext.registered_capital;
document.getElementById('main_business').innerHTML = jcontext.main_business;
document.getElementById('staffs_num').innerHTML = jcontext.staffs_num;



//var jcontext = JSON.parse(json_obj);

