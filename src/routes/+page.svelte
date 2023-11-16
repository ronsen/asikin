<script lang="ts">
	import type { PageServerData } from "./$types";
	import Videos from "$lib/components/videos.svelte";

	export let data: PageServerData;
	let gl = data.gl;
</script>

<div class="p-6">
	<form action="/" method="get">
		<div class="flex gap-3">
			<select
				bind:value={gl}
				name="gl"
				class="select select-bordered w-full"
			>
				<option value="DZ">Algeria</option>
				<option value="AR">Argentina</option>
				<option value="AU">Australia</option>
				<option value="AT">Austria</option>
				<option value="AZ">Azerbaijan</option>
				<option value="BH">Bahrain</option>
				<option value="BD">Bangladesh</option>
				<option value="BY">Belarus</option>
				<option value="BE">Belgium</option>
				<option value="BO">Bolivia</option>
				<option value="BA">Bosnia and Herzegovina</option>
				<option value="BR">Brazil</option>
				<option value="BG">Bulgaria</option>
				<option value="KH">Cambodia</option>
				<option value="CA">Canada</option>
				<option value="CL">Chile</option>
				<option value="CO">Colombia</option>
				<option value="CR">Costa Rica</option>
				<option value="HR">Croatia</option>
				<option value="CY">Cyprus</option>
				<option value="CZ">Czechia</option>
				<option value="DK">Denmark</option>
				<option value="DO">Dominican Republic</option>
				<option value="EC">Ecuador</option>
				<option value="EG">Egypt</option>
				<option value="SV">El Savador</option>
				<option value="EE">Estonia</option>
				<option value="FI">Finland</option>
				<option value="FR">France</option>
				<option value="GE">Georgia</option>
				<option value="DE">Germany</option>
				<option value="GH">Ghana</option>
				<option value="GR">Greece</option>
				<option value="GT">Guatemala</option>
				<option value="HN">Honduras</option>
				<option value="HK">Hong Kong</option>
				<option value="HU">Hungary</option>
				<option value="IS">Iceland</option>
				<option value="IN">India</option>
				<option value="ID">Indonesia</option>
				<option value="IQ">Iraq</option>
				<option value="IE">Ireland</option>
				<option value="IL">Israel</option>
				<option value="IT">Italy</option>
				<option value="JM">Jamaica</option>
				<option value="JP">Japan</option>
				<option value="JO">Jordan</option>
				<option value="KZ">Kazakhstan</option>
				<option value="KE">Kenya</option>
				<option value="KW">Kuwait</option>
				<option value="LA">Laos</option>
				<option value="LV">Latvia</option>
				<option value="LB">Lebanon</option>
				<option value="LY">Libya</option>
				<option value="LI">Liechtenstein</option>
				<option value="LT">Lithuania</option>
				<option value="LU">Luxembourg</option>
				<option value="MY">Malaysia</option>
				<option value="MT">Malta</option>
				<option value="MX">Mexico</option>
				<option value="ME">Montenegro</option>
				<option value="MA">Morocco</option>
				<option value="NP">Nepal</option>
				<option value="NL">Netherlands</option>
				<option value="NZ">New Zealand</option>
				<option value="NI">Nicaragua</option>
				<option value="NG">Nigeria</option>
				<option value="MK">North Macedonia</option>
				<option value="NO">Norway</option>
				<option value="OM">Oman</option>
				<option value="PK">Pakistan</option>
				<option value="PA">Panama</option>
				<option value="PG">Papua New Guinea</option>
				<option value="PY">Paraguay</option>
				<option value="PE">Peru</option>
				<option value="PH">Philippines</option>
				<option value="PL">Poland</option>
				<option value="PR">Puerto Rico</option>
				<option value="QA">Qatar</option>
				<option value="RO">Romania</option>
				<option value="RU">Russia</option>
				<option value="SA">Saudi Arabia</option>
				<option value="SN">Senegal</option>
				<option value="RS">Serbia</option>
				<option value="SG">Singapore</option>
				<option value="SK">Slovakia</option>
				<option value="SI">Slovenia</option>
				<option value="ZA">South Africa</option>
				<option value="KR">South Korea</option>
				<option value="ES">Spain</option>
				<option value="LK">Sri Lanka</option>
				<option value="SE">Sweden</option>
				<option value="CH">Switzerland</option>
				<option value="TW">Taiwan</option>
				<option value="TH">Thailand</option>
				<option value="TN">Tunisia</option>
				<option value="TR">Turkey</option>
				<option value="UG">Uganda</option>
				<option value="UA">Ukraine</option>
				<option value="AE">United Arab Emirates</option>
				<option value="GB">United Kingdom</option>
				<option value="US">United States</option>
				<option value="UY">Uruguay</option>
				<option value="VE">Venezuela</option>
				<option value="VN">Vietnam</option>
				<option value="YE">Yemen</option>
				<option value="ZW">Zimbabwe</option>
			</select>
			<button type="submit" class="btn btn-neutral">Change</button>
		</div>
	</form>
</div>

<Videos videos={data.videos} />
